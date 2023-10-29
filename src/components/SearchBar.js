"use client";

import { useState } from "react";
import Link from "next/link";
import useSearch from "@/hooks/useSearch";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const { wods, setWods, getDataSearch } = useSearch({ search });
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    refreshSearch();
    getDataSearch();

    if (wods.length > 0) showResults(true);
  };

  const refreshSearch = () => {
    setSearch("");
    setShowResults(false);
    setWods([]);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-36 w-full md:max-w-lg">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#3E465A"
              viewBox="0 0 24 24"
            >
              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
            </svg>
          </div>
          <input
            type="text"
            id="search"
            className="block w-full p-4 pl-10 rounded-lg bg-[#202939] border-[#202939] placeholder-[#3E465A] text-[#C0C8D4] outline-none"
            placeholder="Buscar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-[#C0C8D4] absolute right-2.5 bottom-2.5 outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700"
          >
            Buscar
          </button>
        </div>
      </form>
      {wods.length > 0 ? (
        <div className="relative w-full md:max-w-lg p-4 mt-2 rounded-lg overflow-auto h-48 bg-[#11162A]">
          {wods.map((wod) => (
            <Link
              key={wod.id}
              href={`/workouts/${wod.id}`}
              onClick={refreshSearch}
              className="flex flex-col px-4 py-2 bg-[#11162A] hover:bg-[#1C1B46] rounded-md"
            >
              <span className="text-[#C0C8D4]">{wod.title}</span>
              <span className="text-[#3E465A]">{wod.how}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={`${
            !showResults ? "invisible" : "visible"
          } relative w-full md:max-w-lg p-4 mt-2 overflow-auto rounded-lg bg-[#11162A]`}
        >
          <span className="px-4 py-2 text-[#C0C8D4]">Sin resultados</span>
        </div>
      )}
    </>
  );
}
