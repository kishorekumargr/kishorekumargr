import Link from "next/link";
import DarkMode from "./DarkMode";

export default function Navbar() {
  return (
    <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-white dark:bg-zinc-900 bg-opacity-60">
      <DarkMode />

      {/* Desktop Navbar */}
      <div className="hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10">
        <Link
          className="relative rounded-lg px-3 inline-block py-2 text-sm text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900"
          href="/"
        >
          <span className="relative z-10 text-gray-600 dark:text-gray-50">Home</span>
        </Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
