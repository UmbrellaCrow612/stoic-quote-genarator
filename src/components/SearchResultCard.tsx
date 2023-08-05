import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card } from "./ui/card";

export default function SearchResultCard() {
  return (
    <>
      <Card className="flex items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className="text-sm font-medium leading-none">Mark Nike</span>
        <p className="flex-1 hidden overflow-auto leading-7 max-h-24 md:block">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax. lorem100
        </p>
      </Card>
    </>
  );
}
