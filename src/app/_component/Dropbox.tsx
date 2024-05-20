"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import IG from "../../../public/inputGlass.png";

interface DropboxProps {
  inputValue: string;
}

export default function Dropbox({ inputValue }: DropboxProps) {
  const [data, setData] = useState("");
  useEffect(() => {
    if (inputValue) {
      fetch(`/api/searchConditions?searchTerm=${inputValue}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.info("calling api");
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.info("calling api");
          console.error("Error:", error);
        });
    }
  }, [inputValue]);

  return (
    <div className="w-[486px] h-auth fixed top-[20.5rem] rounded-xl bg-white p-[24px] shadow-lg">
      <div className="flex items-center py-[8px] text-[14.4px]">
        <Image src={IG} alt="돋보기" className="w-[16px] h-[16px] mr-4" />
        {inputValue}
      </div>
      <div className="py-[13px] text-[13px] text-gray-400">추천 검색어</div>
    </div>
  );
}
