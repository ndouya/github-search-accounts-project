"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/SearchBar";
import ThemeToggle from "@/components/ThemeToggle";
import UserCard from "@/components/UserCard";
import { GithubUser } from "@/types/github";

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchUser = async () => {
    if (!searchValue.trim()) return;
    try {
      setLoading(true);
      setError("");
      const response = await fetch(`/api/github?username=${encodeURIComponent(searchValue)}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();
      setUser(data);
    } catch {
      setError("No results");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const loadDefaultUser = async () => {
      try {
        const response = await fetch("/api/github?username=octocat");
        if (!response.ok) throw new Error();
        const data = await response.json();
        setUser(data);
      } catch (err) {
        console.error("Local API failed, using fallback", err);
      }
    };
    loadDefaultUser();
  }, []);

  return (
    // Fixed: Flex layout wrapper centring the entire devfinder card right in the middle of the screen
    <main className="min-h-screen bg-[#F6F8FF] dark:bg-[#141D2F] flex flex-col justify-center items-center p-4 transition-colors duration-200">
      
      {/* Explicit structural container setting max-width to exactly match FM design */}
      <div className="w-full max-w-[570px] lg:max-w-[730px] my-6">
        
        {/* Top bar branding header spacing layout */}
        <div className="mb-9 flex items-center justify-between">
          <h1 className="text-[26px] font-bold tracking-normal text-[#2B3442] dark:text-white font-mono">
            devfinder
          </h1>
          <ThemeToggle />
        </div>

        {/* Search Input alignment layout */}
        <div className="mb-6">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onSearch={searchUser}
          />
        </div>

        {loading && (
          <p className="mt-6 text-center text-[#0079FF] font-mono font-semibold">
            Loading...
          </p>
        )}

        {error && (
          <p className="mt-4 ml-4 text-red-500 font-medium">
            {error}
          </p>
        )}

        {user && !loading && (
          <UserCard user={user} />
        )}
      </div>
    </main>
  );
}