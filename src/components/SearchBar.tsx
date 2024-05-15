import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { DropDowns } from "./DropDowns";
import axios from "axios";

const Container = styled.div``;

const SearchBarContainer = styled.div`
  width: 486px;
  height: 69.7px;
  display: flex;
  flex-direction: row;
  background-color: #ffffff;
  border-radius: 42px;
  margin-top: 40px;
  position: relative;

  border: ${({ isFocused }) => isFocused ? "1px solid #007BE9" : "none"};
`;

const TestInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 42px;
  text-align: center;
  :focus {
    border: none;
    outline: none;
  }
`;

interface ISearchBarProp{
  handleSearch:(input:string)=>void
}


export const SearchBar = ({ handleSearch }: ISearchBarProp) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [placeholderValue , setPlacehodlerValue ] = useState<string>('질환명을 입력해주세요')
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<string[]>([]);
  const inputRef = useRef(null);

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleInput = (e) => {
    setInput(e.target.value)
  };

  useEffect(() => {
    if (input.trim() !== "") {
      console.log(input);
      const encodedInput = encodeURIComponent(input);
      const fetchData = async () => {
        try {
          console.info("calling api")
          const response = await axios.get(`/api/v1/search-conditions/?name=${encodedInput}`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }else{
      setData([])
    }
  }, [input]);

  useEffect(()=>{
    if(isFocus){
      setPlacehodlerValue('')
    }
    if(!isFocus){
      setPlacehodlerValue('질환명을 입력해주세요')
    }
  },[isFocus])

  const handleClickDropDown = (value:string) =>{
    handleSearch(value)
    setInput(value)
  }

  //조건
  //1.tab을 누르면 dropdown으로 focus가 가야함
  //2. 추천 검색어를 누르거나 해서 검색을 진행하면 focus가 사라지고 input 변경 후 결과 보여줌

  // const handleDownFocus = (event) =>{
  //   if(event.key === "ArrowDown" || event.key ==="Tab"){

  //   }
  // }
  
  return (
    <Container>
      <SearchBarContainer  
      tabIndex={0}         
      onFocus={handleFocus}
      onBlur={handleBlur}
      >
        <TestInput
          value={input}
          placeholder={placeholderValue}
          onChange={handleInput}
          ref={inputRef}
        />
        <button onClick={() => handleSearch(input)}>검색 결과</button>
        <DropDowns isFocus={isFocus} datas={data} handleSearch={handleClickDropDown}/>
        {/* //TODO: focus가 tab & 위아래 화살표로 자연스럽게 이동하며 이동하면서 input이 변경되어야함 */}
      </SearchBarContainer>
    </Container>
  );
};
