import Link from "next/link";
import Theme from "./Theme";

export default function Navbar() {
  return (
    <nav>
      <Theme />
      <div className="nav-desktop">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/snippets">Snippets</Link>
        <Link href="/">Resources</Link>
      </div>
    </nav>
  );
}
