import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-row">
      <Link href="/">Github</Link>
      <Link href="/">LinkedIn</Link>
    </footer>
  );
}
