import Image from "next/image";
import { useEffect, useState } from "react";
import IG from "../../../public/inputGlass.png";

export default function NoSearch() {
  const [recentSearches, setRecentSearches] = useState<{ text: string }[]>([]);

  useEffect(() => {
    const storedWords = localStorage.getItem("words");
    if (storedWords) {
      const words = JSON.parse(storedWords);
      setRecentSearches(words);
    }
  }, []);
  return (
    <div className="w-[486px] h-auto fixed top-[20.5rem] rounded-xl bg-white p-[24px] shadow-lg">
      <div className="pb-[10px] text-[13px] text-gray-400">최근 검색어</div>
      {recentSearches.length > 0 ? (
        <div>
          {recentSearches.map((search, index) => (
            <div
              className="flex items-center py-[12px] text-[14.4px]"
              key={index}
            >
              <Image
                src={IG}
                alt="돋보기"
                className="w-[16px] h-[16px] mr-4 "
              />
              {search.text}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-base text-gray-300">최근 검색어가 없습니다</div>
      )}
    </div>
  );
}
