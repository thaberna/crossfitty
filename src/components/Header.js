import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="relative w-full md:h-[600px] h-[300px]">
      <div className="bg-[url('../assets/hero.webp')] bg-cover md:bg-center bg-no-repeat absolute w-full md:h-[600px] h-[300px] brightness-75"></div>
      <div className="flex items-center justify-start flex-col h-full">
        <SearchBar />
      </div>
    </header>
  );
}
