import Link from "next/link";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex flex-row justify-between max-w-4xl w-full p-8 mt-0 mb-0 md:mt-4 md:mg-10 mx-auto bg-white dark:bg-black">
      <Theme />
      {/* Mobile */}
      <div></div>
      {/* Desktop */}
      <div className="hidden sm:flex flex-row items-center gap-6 px-7 rounded-full h-9 text-sm tracking-tight font-semibold ring-1 ring-zinc-600 text-gray-600 dark:text-gray-50">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/snippets">Snippets</Link>
        <Link href="/Resources">Resources</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </nav>
  );
}
