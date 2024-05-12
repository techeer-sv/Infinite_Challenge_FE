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

export const SearchBar = ({ handleSearch }: any) => {
  const [isFocus, setIsFocus] = useState(false);
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
          const response = await axios.get(`/api/v1/search-conditions/?name=${encodedInput}`);
          console.log(response)
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
  


  return (
    <Container>
      <SearchBarContainer>
        <TestInput
          value={input}
          placeholder="질환명을 입력해주세요"
          onChange={handleInput}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />    
        <button  onClick={() => handleSearch(input)}>검색</button>
        <DropDowns datas={data} handleSearch={handleSearch} />
      </SearchBarContainer>
    </Container>
  );
};
