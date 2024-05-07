import React, { useEffect, useState } from "react";
import useInput from "./useInput";
import { ARROW_DOWN, ARROW_UP, ENTER } from "../constants/search";
import { useGetSearchData } from "../remote/query/main";
import { useDebouncedSearch } from "./useDebouncedSearch";

const useSearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { value, setValue, onChange } = useInput();
  const [isActive, seIsActive] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const { debouncedValue, setValue: debouncedSearch } = useDebouncedSearch();

  useEffect(() => {
    debouncedSearch(value);
  }, [value]);

  const { data: searchLists } = useGetSearchData(debouncedValue);

  const handleFocus = () => {
    seIsActive(true);
  };

  const handleBlur = () => {
    seIsActive(false);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  const getUpIndex = (prevIndex: number) => {
    if (prevIndex <= 0) return searchLists.length - 1;
    return prevIndex - 1;
  };

  const getDownIndex = (prevIndex: number) => {
    if (prevIndex >= searchLists.length - 1) return 0;
    return prevIndex + 1;
  };

  const onKeyDownItem = (key: string) => {
    if (key === ARROW_UP)
      setSelectedIndex((prevIndex) => getUpIndex(prevIndex));
    if (key === ARROW_DOWN)
      setSelectedIndex((prevIndex) => getDownIndex(prevIndex));
    if (key === ENTER && selectedIndex !== -1) {
      setValue(() => searchLists[selectedIndex].name);
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
  };
};

export default useSearchBar;
