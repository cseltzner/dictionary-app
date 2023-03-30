import React, { useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  defaultWord?: string;
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
      className="relative bg-neutral-300 w-3/5 rounded-full font-bold"
      onSubmit={onFormSubmit}
    >
      <button type={"submit"}>
        <SearchIcon className="absolute right-4 top-[20%] w-5 h-5 stroke-primary" />
      </button>
      <input
        type={"text"}
        className={"bg-neutral-300 w-full px-4 py-2 rounded-full font-bold"}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
    </form>
  );
};

export default SearchBar;
