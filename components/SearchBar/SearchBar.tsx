import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  defaultWord?: string;
  placeholder?: string;
  onSubmit: (word: string) => void;
}

const SearchBar = (props: Props) => {
  const [inputValue, setInputValue] = useState(props.defaultWord || "");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    props.onSubmit(inputValue);
  };

  return (
    <form
      className="relative bg-neutral-300 w-full md:w-3/5 rounded-2xl font-bold shadow-lg"
      onSubmit={onFormSubmit}
    >
      <button type={"submit"}>
        <SearchIcon className="absolute right-6 top-1/4 w-5 h-5 stroke-primary" />
      </button>
      <input
        type={"text"}
        className={
          "bg-neutral-300 w-full px-6 py-3 rounded-full font-bold text-lg placeholder:font-normal placeholder:text-neutral-500 placeholder:text-lg placeholder:invisible placeholder:md:visible"
        }
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default SearchBar;
