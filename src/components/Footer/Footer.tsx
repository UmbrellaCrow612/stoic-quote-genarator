import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="py-6 md:px-8 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            @Stoics {new Date().getFullYear()} open source at{" "}
            <Link href="https://github.com/UmbrellaCrow612/stoic-quote-genarator" target="_blank" className="underline">
              GitHub
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
