import useSWR from "swr";

export default function Home() {
  const { data, error, isLoading, isValidating, mutate } =
    useSWR(`/api/quotes/random`);

  return (
    <section className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen gap-4 px-4 mx-auto text-center xl:px-0">
      {/* Animate in and fade in */}
      {/* This is fetching it every 3 seconds because of config, add revalidate or in out fade or show new quotes like a carousel*/}

      <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">
        {isLoading ? <>Loading</> : <>&quot;{data.text}&quot;</>}
      </h1>
      <p className="text-xl text-muted-foreground">
        - {isLoading ? <>Loading</> : <>&quot;{data.Author.name}&quot;</>}
      </p>
    </section>
  );
}
