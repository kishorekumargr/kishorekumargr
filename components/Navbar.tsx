import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50">
      {/* Mobile Navbar */}
      <div className="md:hidden flex flex-row justify-between px-5 pt-7">
        <p className="text-3xl">K</p>
        <div className="text-2xl font-bold flex gap-4">
          <Link href="https://github.com/grkisho">G</Link>
          <Link href="https://www.linkedin.com/in/grkisho/">in</Link>
          <p>R</p>
          <p>@</p>
        </div>
      </div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-row justify-between px-15 pt-7">
        <p>K</p>
        <div className="text-xs flex gap-10">
          <Link href="https://github.com/grkisho">github</Link>
          <Link href="https://www.linkedin.com/in/grkisho/">linkedin</Link>
          <Link href="">resume</Link>
        </div>
        <Link href="">grkisho@gmail.com</Link>
      </div>
    </nav>
  );
}
