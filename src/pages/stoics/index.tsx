import LoadingResultCard from "@/components/LoadingResultCard";
import SearchResultCard from "@/components/SearchResultCard";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true); // replace with swr fetching and loading

  return (
    <section className="flex flex-col max-w-screen-xl px-4 mx-auto xl:px-0 h-[55rem]">
      <div className="w-full px-3 py-10">
        <Input
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={loading}
        />
      </div>
      <div className="flex-grow space-y-4 overflow-auto">
        <SearchResultCard />
        <LoadingResultCard /> {/* Render 10 dummy ones loading ? etc */}
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
