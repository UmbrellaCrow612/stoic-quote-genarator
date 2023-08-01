import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto xl:px-0">
        <Button variant={"ghost"} asChild className="uppercase">
          <Link href="/">Stoicism</Link>
        </Button>

        <div className="flex gap-5">
          <Button variant={"outline"} asChild className="">
            <Link href="/">Stoics</Link>
          </Button>
          <Button variant={"outline"} asChild className="">
            <Link href="/">Quotes</Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
