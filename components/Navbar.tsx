import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <button>K</button>
      <div>
        <Link href="/">Home</Link>
      </div>
      <div>
        <button>Home</button>
      </div>
    </nav>
  );
}
