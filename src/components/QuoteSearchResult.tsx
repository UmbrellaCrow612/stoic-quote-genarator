import Link from "next/link";
import { Card } from "./ui/card";

export default function QuoteSearchResult() {
  return (
    <Link href="/quotes/1">
      <Card className="relative flex flex-col items-start gap-2 p-4">
        <p className="text-sm font-medium leading-none">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
        <p className="text-sm text-muted-foreground"> - Marcus</p>
      </Card>
    </Link>
  );
}
