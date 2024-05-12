"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import SB from "../../../public/searchButton.png";
import Dropbox from "./Dropbox";
import NoSearch from "./NoSeach";

interface wordsInterface {
  text: string;
}

export default function SearchBar() {
  const [openDrop, setOpenDrop] = useState(false); // 드롭박스 열고 닫기 관리
  const [words, setWords] = useState<wordsInterface[]>([]); // 검색 기록 관리
  const [inputValue, setInputValue] = useState(""); // 입력 값 관리
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputClick = () => {
    setOpenDrop(true);
  };

  const handleResultClick = () => {
    const inputValue = inputRef.current?.value; // 입력창의 내용 가져오기
    if (inputValue) {
      const newWord = {
        text: inputValue,
      };
      setWords([...words, newWord]);
      localStorage.setItem("words", JSON.stringify([newWord, ...words]));
      inputRef.current.value = ""; // 입력창 내용 지우기
      setInputValue("");
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setOpenDrop(false);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const result = localStorage.getItem("words") || "[]";
      setWords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("words", JSON.stringify(words));
  }, [words]);

  return (
    <>
      <div className="relative flex justify-center items-center mt-10 w-[486px] h-[4rem] rounded-full bg-white ">
        <input
          ref={inputRef}
          type="text"
          className="text-lg h-[4rem] w-[486px] pl-4 pr-16 rounded-full outline-none border-2 focus:border-blue-500"
          placeholder="질환명을 입력해주세요."
          onClick={handleInputClick}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => {
            e.target.placeholder = "질환명을 입력해주세요.";
          }}
          onChange={handleInputChange}
        />
        <Image
          src={SB}
          alt="searchButton"
          className="w-12 absolute right-2 top-2 cursor-pointer"
          onClick={handleResultClick}
        />
      </div>
      {openDrop &&
        (inputValue === "" ? (
          <NoSearch />
        ) : (
          <Dropbox inputValue={inputValue} />
        ))}
    </>
  );
}
