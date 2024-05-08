/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { SetStateAction, useEffect, useState } from "react";
import { ARROW_DOWN, ARROW_UP, ENTER } from "../constants/search";
import { useGetSearchData } from "../remote/query/main";
import { useDebouncedSearch } from "./useDebouncedSearch";

type UseSearchBar = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: React.Dispatch<SetStateAction<string>>;
  refetch: () => void;
};

const useSearchBar = ({ value, setValue, onChange, refetch }: UseSearchBar) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [recentData, setRecentData] = useState<{ name: string; id: number }[]>(
    []
  );
  const [isActive, setIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const { debouncedValue, setValue: debouncedSearch } = useDebouncedSearch();

  useEffect(() => {
    debouncedSearch(value);
  }, [value]);

  const { data: searchLists } = useGetSearchData(debouncedValue);

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!isMouseDown) {
        setIsActive(false);
      }
    }, 100);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
    handleFocus();
  };

  const getUpIndex = (prevIndex: number) => {
    if (value) {
      if (prevIndex <= 0) return searchLists.length - 1;
    } else {
      if (prevIndex <= 0) return recentData.length - 1;
    }
    return prevIndex - 1;
  };

  const getDownIndex = (prevIndex: number) => {
    if (value) {
      if (prevIndex >= searchLists.length - 1) return 0;
    } else {
      if (prevIndex >= recentData.length - 1) return 0;
    }
    return prevIndex + 1;
  };

  const onKeyDownItem = (key: string) => {
    if (key === ARROW_UP)
      setSelectedIndex((prevIndex) => getUpIndex(prevIndex));
    if (key === ARROW_DOWN)
      setSelectedIndex((prevIndex) => getDownIndex(prevIndex));
    if (key === ENTER && selectedIndex !== -1 && value) {
      setValue(() => searchLists[selectedIndex].name);
    } else {
      if (key === ENTER && selectedIndex !== -1 && !value) {
        setValue(() => recentData[selectedIndex].name);
      }
    }
  };

  const onKeyDownInputText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([ARROW_UP, ARROW_DOWN, ENTER].includes(e.key)) {
      e.preventDefault();
      if (e.nativeEvent.isComposing === false) {
        onKeyDownItem(e.key);
      }
    }
  };

  const handleClickResult = () => {
    const data = localStorage.getItem("search");
    if (data !== null) {
      const localSearchData = JSON.parse(data);
      const updatedData = [
        { name: value, id: localSearchData.length },
        ...localSearchData,
      ];
      localStorage.setItem("search", JSON.stringify(updatedData));
      setRecentData(updatedData);
    } else {
      localStorage.setItem("search", JSON.stringify([{ name: value, id: 0 }]));
      setRecentData([{ name: value, id: 0 }]);
    }

    refetch();
  };

  useEffect(() => {
    const data = localStorage.getItem("search");
    if (data !== null) {
      const localSearchData = JSON.parse(data);
      setRecentData(localSearchData);
    }
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [value]);

  return {
    isActive,
    handleFocus,
    handleBlur,
    handleInputFocus,
    inputRef,
    value,
    onChange,
    onKeyDownInputText,
    selectedIndex,
    searchLists,
    handleClickResult,
    handleMouseUp,
    handleMouseDown,
    recentData,
  };
};

export default useSearchBar;
