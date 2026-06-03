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
    <div className="flex items-center gap-4 rounded-2xl bg-[#1F2A48] p-3">
      <Search className="text-blue-500" />

      <input
        className="flex-1 bg-transparent outline-none text-white"
        placeholder="Search GitHub username..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      <button
        onClick={onSearch}
        className="rounded-xl bg-blue-500 px-5 py-3 font-semibold"
      >
        Search
      </button>
    </div>
  );
}