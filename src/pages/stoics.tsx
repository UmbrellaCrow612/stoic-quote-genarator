import SearchResultCard from "@/components/SearchResultCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="flex flex-col max-w-screen-xl px-4 mx-auto xl:px-0 h-[55rem]">
      <div className="w-full px-3 py-10">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="flex-grow space-y-4 overflow-auto">
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </div>
    </section>
  );
}
