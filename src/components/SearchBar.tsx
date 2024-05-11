import SearchIcon from "@/components/icons/SearchIcon";
import { useState } from "react";

// Controlled 컴포넌트
interface ISearchBar {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SearchBar = ({ value, placeholder, onSubmit, onChange }: ISearchBar) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form
      className={`flex items-center p-2 rounded-full relative border border-solid bg-white ${isFocused ? "border-primary" : "border-none"}`}
      onSubmit={handleSubmit}
      style={{ width: "430px", height: "70px" }}
    >
      <div className="flex-grow flex items-center pl-4">
        <SearchIcon size={16} color="silver" />
        <input
          value={value}
          type="text"
          className="w-full text-base placeholder-white bg-transparent outline-none ml-2"
          placeholder={placeholder}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full ml-2"
      >
        <SearchIcon size={21} color="white" />
      </button>
    </form>
  );
};

export default SearchBar;
