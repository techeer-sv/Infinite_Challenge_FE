import React, { useState } from "react";
import useInput from "./useInput";

const useSearchBar = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const { value, onChange } = useInput();
  const [isActive, seIsActive] = useState(false);

  const handleFocus = () => {
    seIsActive(true);
  };

  const handleBlur = () => {
    seIsActive(false);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return {
    isActive,
    handleFocus,
    handleBlur,
    handleInputFocus,
    inputRef,
    value,
    onChange,
  };
};

export default useSearchBar;
