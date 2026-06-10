"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({
  value,
  onChange,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white dark:bg-[#1F2A48] p-3 shadow-md transition-colors duration-200">
      <Search
        size={22}
        className="ml-2 text-[#0079FF]"
      />

      <input
        type="text"
        placeholder="Search GitHub username..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
        className="flex-1 bg-transparent text-[#2B3442] dark:text-white outline-none placeholder:text-[#4B567A] dark:placeholder:text-white/70 text-sm md:text-base"
      />

      <button
        onClick={onSearch}
        className="rounded-xl bg-[#0079FF] px-5 py-3 font-semibold text-white hover:bg-[#60abff] transition-colors"
      >
        Search
      </button>
    </div>
  );
}