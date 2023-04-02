import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../Icons/SearchIcon";

interface Props {
  defaultWord?: string;
  placeholder?: string;
  defaultActive?: boolean;
  onSubmit: (word: string) => void;
}

const SearchBar = (props: Props) => {
  const [inputValue, setInputValue] = useState(props.defaultWord || "");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (props.defaultActive) {
      inputRef.current?.focus();
    }
  }, []);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputValue) return;

    props.onSubmit(inputValue);
  };

  return (
    <form
      className="relative bg-neutral-300 dark:bg-neutral-700 w-full md:w-3/5 rounded-2xl font-bold shadow-lg"
      onSubmit={onFormSubmit}
    >
      <button type={"submit"}>
        <SearchIcon className="absolute right-6 top-1/4 w-5 h-5 stroke-primary dark:stroke-purple-300" />
      </button>
      <input
        type={"text"}
        className={
          "bg-neutral-300 dark:bg-neutral-700 w-full px-6 py-3 rounded-full font-bold text-lg outline-none placeholder:font-normal placeholder:text-neutral-500 placeholder:text-lg placeholder:invisible placeholder:md:visible"
        }
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder={props.placeholder}
        ref={inputRef}
      />
    </form>
  );
};

export default SearchBar;
