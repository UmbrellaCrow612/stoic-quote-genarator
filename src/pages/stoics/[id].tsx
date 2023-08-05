import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Page() {
  return (
    <section className="flex flex-col items-center justify-center max-w-screen-xl gap-4 px-4 py-4 mx-auto text-center md:items-start md:justify-start xl:px-0 md:text-start">
      <div className="relative w-48 h-48 md:w-60 md:h-60 xl:w-72 xl:h-72">
        <Image src={"/favicon.ico"} alt="name" fill className="object-cover" />
      </div>
      <p className="text-sm font-medium leading-none">Marcus Nike</p>
      <p className="leading-7">description</p>
      <p className="text-lg font-semibold">Bio</p>

      <p className="font-bold">Quotes:</p>
      <div className="w-full space-y-4 overflow-auto max-h-[25rem]">
        <Card className="flex items-center p-4">Quote</Card>{" "}
        {/* Link to that quotes page */}
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
        <Card className="flex items-center p-4">Quote</Card>
      </div>
    </section>
  );
}
