import Link from "next/link";

export default function Blog() {
  return (
    <main>
      <div>
        <h1>Blog</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I&apos;ve been programming for almost 6 years now. Throughout this year, I&apos;ve worked
          with various technologies. I&apos;m here to share just that. Use the search below to
          filter by title.
        </p>
        <div className="relative w-full mb-4">
          <input
            type="text"
            aria-label="Search articles"
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-zinc-800 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-zinc-800 text-gray-900 dark:text-gray-100"
          />
        </div>
        <h3>Most Popular</h3>
        <h3>All Posts</h3>
      </div>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 mt-20">
        <h1>Free Code Camp</h1>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-10 w-full">
          <Link
            href="https://www.freecodecamp.org/news/prepare-for-react-technical-interviews/"
            className=" w-full mb-10 h-full"
            target="__blank"
          >
            <p className="text-sm font-light py-2">Sept 8, 2022</p>
            <div className="flex flex-col justify-between ">
              <h2 className="font-bold text-lg text-gray-700 dark:text-zinc-300">
                How to Prepare for React Interviews – Front-End Technical Interview Guide
              </h2>
            </div>
          </Link>
          <Link
            href="https://www.freecodecamp.org/news/how-to-build-react-based-code-editor/"
            className=" w-full mb-10 h-full"
            target="__blank"
          />
          <p className="text-sm font-light py-2">May 25, 2022</p>
          <div className="flex flex-col justify-between ">
            <h2 className="font-bold text-lg text-gray-700 dark:text-zinc-300">
              How to Build a Code Editor with React that Compiles and Executes in 40+ Languages
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
