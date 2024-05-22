import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { NewDropDown } from "./NewDropDown";
import { HistoryDropDown } from "./HistoryDropDown";

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
  width: 430px;
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


const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background-color: #007BE9;
  border-radius: 500px;
`

interface ISearchBarProp{
  handleSearch:(input:string)=>void
}

export const SearchBar = ({ handleSearch }: ISearchBarProp) => {
  const [input, setInput] = useState<string>('');//유저에게 보여줄 input
  const [ searchInput, setSearchInput ] = useState<string>('')//실제 검색이 날라가는 input
  //1. keypress-> input이랑, serachinput 같이 변경
  //2. searchInput이 변경되면 검색 시전

  const [isFocus, setIsFocus] = useState<boolean>(false); 
  const [placeholderValue , setPlacehodlerValue ] = useState<string>('질환명을 입력해주세요')
  const [data, setData] = useState<string[]>([]);
  const inputRef = useRef(null);
  const [ focusIndex, setFocusIndex ] = useState<number>(-1)

  const handleInput = (e) => {
    if (["ArrowDown", "ArrowUp", "Enter", "Tab"].includes(e.key)) return;
    setIsFocus(true)
    setInput(e.target.value);
    setSearchInput(e.target.value)
    setFocusIndex(-1)
    console.log(e.target.value)
  };//onChange

  useEffect(()=>{
    const fetchData = async (query:string) => {
      if (query !== "") {
        const encodedInput = encodeURIComponent(query);
        try {
          console.info("calling api")
          const response = await axios.get(`/api/v1/search-conditions/?name=${encodedInput}`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setData([]);
      }
    };
    fetchData(searchInput)
  },[searchInput])//searchInput이 변경시는 검색이 진행됨

  const handleKeyPress = (event) =>{
    if(event.key === "ArrowDown" || event.key ==="Tab"){
      event.preventDefault()
      setFocusIndex(focusIndex+1)
    }else if(event.key === "ArrowUp"){
      event.preventDefault()
      setFocusIndex(focusIndex-1)
    } else if (event.key === "Enter") {
      event.preventDefault()
      handleSearch(input);
      setIsFocus(false)
    }
  }//특정 keyPress 진행시 serachInput은 변경되지 않음
  
  
  useEffect(() => {
    if (focusIndex >= 0 && focusIndex < data.length) {
      setInput(data[focusIndex]?.name);
    }
  }, [focusIndex, data]);
  //특정 keyPress로 focusIndex 변경되면 input만 변경


  
  const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

  useEffect(()=>{
    console.log(JSON.parse(localStorage.getItem('searchHistory')))
  },[])


  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  useEffect(()=>{
    if(isFocus){
      setPlacehodlerValue('')
    }
    if(!isFocus){
      setPlacehodlerValue('질환명을 입력해주세요')
      setFocusIndex(-1)
    }
  },[isFocus])

  const handleClickDropDown = (value:string) =>{
    handleSearch(value)
    setInput(value)
    setIsFocus(false)
  }

  const handleClickButton = (value:string) =>{
    handleSearch(value)
    setIsFocus(false)
  }
  
  return (
    <Container>
      <SearchBarContainer
      tabIndex={0}
      isFocused={isFocus}
      onFocus={handleFocus}
      onBlur={handleBlur}
      >
        <TestInput
          value={input}
          placeholder={placeholderValue}
          onChange={handleInput}
          ref={inputRef}
          onKeyDown={handleKeyPress}
        />
        <SearchButton onClick={() => handleClickButton(input)}>검색 결과</SearchButton>
        {
          searchInput === '' ? 
          <HistoryDropDown isFocus={isFocus} datas={history} handleSearch={handleClickDropDown} />
          : 
          <NewDropDown input={input} isFocus={isFocus} focusIndex={focusIndex} datas={data} handleSearch={handleClickDropDown} />
        }
      </SearchBarContainer>
    </Container>
  );
};
