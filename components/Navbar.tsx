import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex sticky top-0 z-50 justify-around gap-5 pt-10 mb-30">
      <Link className="text-3xl font-black" href="/">
        K
      </Link>
      <div className="flex gap-5">
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </nav>
  );
}
