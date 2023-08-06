import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/router";

export default function Navbar() {
  const { pathname } = useRouter();
  return (
    <>
      <nav className="flex items-center justify-between h-16 max-w-screen-xl px-4 mx-auto xl:px-0">
        <Button variant={"ghost"} asChild className="uppercase">
          <Link href="/">Stoicism</Link>
        </Button>

        <div className="flex gap-5">
          <Button
            variant={pathname === "/stoics" ? "default" : "outline"}
            asChild
          >
            <Link href="/stoics">Stoics</Link>
          </Button>
          <Button
            variant={pathname === "/quotes" ? "default" : "outline"}
            asChild
            className=""
          >
            <Link href="/quotes">Quotes</Link>
          </Button>
        </div>
      </nav>
    </>
  );
}
