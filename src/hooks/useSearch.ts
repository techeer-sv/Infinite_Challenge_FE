// useSearch.ts
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export const useSearch = (handleSearch:any) => {
  const [input, setInput] = useState<string>('');//유저에게 보여줄 input
  const [searchInput, setSearchInput] = useState<string>('')//실제 검색이 날라가는 input
  const [isFocus, setIsFocus] = useState<boolean>(false); 
  const [placeholderValue, setPlacehodlerValue] = useState<string>('질환명을 입력해주세요')
  const [data, setData] = useState<string[]>([]);
  const inputRef = useRef(null);
  const [focusIndex, setFocusIndex] = useState<number>(-1)
  const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');

  const handleInput = (e) => {
    if (["ArrowDown", "ArrowUp", "Enter", "Tab"].includes(e.key)) return;
    setIsFocus(true)
    setInput(e.target.value);
    setSearchInput(e.target.value)
    setFocusIndex(-1)
  };//onChange

  const handleKeyPress = (event) => {
    if (event.key === "ArrowDown" || event.key === "Tab") {
      event.preventDefault()
      setFocusIndex(focusIndex + 1)
    } else if (event.key === "ArrowUp") {
      event.preventDefault()
      setFocusIndex(focusIndex - 1)
    } else if (event.key === "Enter") {
      event.preventDefault()
      handleSearch(input);
      setIsFocus(false)
    }
  }//특정 keyPress 진행시 serachInput은 변경되지 않음

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleClickDropDown = (value: string) => {
    handleSearch(value)
    setInput(value)
    setIsFocus(false)
  }

  const handleClickButton = (value: string) => {
    handleSearch(value)
    setIsFocus(false)
  }

  useEffect(() => {
    const fetchData = async (query: string) => {
      if (query !== "") {
        const encodedInput = encodeURIComponent(query);
        try {
          const response = await axios.get(`/api/v1/search-conditions/?name=${encodedInput}`);
          setData(response.data);
        } catch (error) {
          console.error(error);
        }
      } else {
        setData([]);
      }
    };

    const debounce = setTimeout(() => {
      return fetchData(searchInput);
    }, 500);
    return () => clearTimeout(debounce)
  }, [searchInput])

  useEffect(() => {
    if (focusIndex >= 0 && focusIndex < data.length) {
      setInput(data[focusIndex]?.name);
    }
  }, [focusIndex, data]);

  useEffect(() => {
    if (isFocus) {
      setPlacehodlerValue('')
    }
    if (!isFocus) {
      setPlacehodlerValue('질환명을 입력해주세요')
      setFocusIndex(-1)
    }
  }, [isFocus])

  return {
    input,
    isFocus,
    placeholderValue,
    data,
    focusIndex,
    history,
    handleInput,
    handleKeyPress,
    handleFocus,
    handleBlur,
    handleClickDropDown,
    handleClickButton,
    inputRef,
    searchInput
  }
}
