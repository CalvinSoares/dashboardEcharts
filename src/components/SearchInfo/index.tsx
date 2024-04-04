"use client"

import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

interface Props {
  type: string;
  placeholder: string;
  value?: string;
}

const Search: React.FC<Props> = ({ type, placeholder, value }) => {
  const [inputValue, setInputValue] = useState(value || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="h-12 w-48 flex items-center bg-[#333333] rounded-3xl px-4 py-2">
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent h-8 w-36 outline-none text-lg text-white placeholder:text-gray-300"
        value={inputValue}
        onChange={handleChange}
      />
      <BiSearch className="text-white"/>
    </div>
  );
};

export default Search;
