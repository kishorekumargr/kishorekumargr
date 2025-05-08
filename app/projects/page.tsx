import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col justify-center bg-white dark:bg-zinc-900 px-8 text-gray-900 dark:text-gray-100 antialiased">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’ve developed commercial projects as well as hobby projects. All projects are included
          (along with course related projects) here. –{" "}
          <Link href="/blog" className="text-blue-500 hover:underline">
            checkout my blog{" "}
          </Link>{" "}
          while you&apos;re here.
          <br /> I write about technology, learning and memes.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Full Stack
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>
    </main>
  );
}
