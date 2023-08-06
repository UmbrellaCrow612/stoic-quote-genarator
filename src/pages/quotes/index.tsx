import LoadingQuoteSearchResult from "@/components/LoadingQuoteSearchResult";
import QuoteSearchResult from "@/components/QuoteSearchResult";
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
      <div className="flex flex-col flex-grow gap-4 px-2 py-1 overflow-auto">
        <QuoteSearchResult />
        <LoadingQuoteSearchResult />
      </div>
    </section>
  );
}
