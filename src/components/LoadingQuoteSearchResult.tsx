import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LoadingQuoteSearchResult() {
  return (
    <>
      <Card className="relative flex flex-col gap-2 p-4">
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-12 h-4" />
      </Card>
    </>
  );
}
