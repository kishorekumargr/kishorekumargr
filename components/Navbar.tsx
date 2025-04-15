import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row sticky justify-between mx-6 mt-7">
      <div>
        <p className="text-3xl">K</p>
      </div>
      <div className="text-2xl font-bold flex gap-4">
        <Link href="https://github.com/grkisho">g</Link>
        <p>in</p>
        <p>r</p>
        <p>m</p>
      </div>
    </div>
  );
}
