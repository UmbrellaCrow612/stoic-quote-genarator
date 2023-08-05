import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

export default function LoadingResultCard() {
  return (
    <>
      <Card className="flex items-center gap-4 p-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="w-full h-4" />
      </Card>
    </>
  );
}
