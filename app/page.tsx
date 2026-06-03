"use client";

import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import UserCard from "@/components/UserCard";
import { GithubUser } from "@/types/github";

export default function Home() {
  const [searchValue, setSearchValue] =
    useState("");

  const [user, setUser] =
    useState<GithubUser | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const searchUser = async () => {
    if (!searchValue.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://api.github.com/users/${searchValue}`
      );

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();

      setUser(data);
    } catch {
      setError("No results");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#141D2F] p-6 text-white">
      <div className="mx-auto mt-10 max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">
          devfinder
        </h1>

        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={searchUser}
        />

        {loading && (
          <p className="mt-4">Loading...</p>
        )}

        {error && (
          <p className="mt-4 text-red-500">
            {error}
          </p>
        )}

        {user && <UserCard user={user} />}
      </div>
    </main>
  );
}