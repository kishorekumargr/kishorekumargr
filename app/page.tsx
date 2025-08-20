import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen">
      <nav className="top-10 sticky flex justify-evenly items-center bg-linear-to-b from-gray-50/80 to-gray-300/80 shadow-md mx-auto px-10 rounded-full max-w-3xl h-15 font-bold text-gray-600">
        <Link className="hover:text-black hover:scale-150 transition-transform transform" href="/">
          Home
        </Link>
        <Link className="hover:text-black hover:scale-150 transition-transform transform" href="/">
          About
        </Link>
        <Link className="hover:text-black hover:scale-150 transition-transform transform" href="/">
          Projects
        </Link>
        <Link className="hover:text-black hover:scale-150 transition-transform transform" href="/">
          Contact
        </Link>
      </nav>

      <main>
        <section>
          <h1 className="m-50 font-bold text-6xl text-center tracking-tight">Kishore Kumar</h1>
        </section>
        <section>
          <h2>About</h2>
        </section>
        <section>
          <h2>Projects</h2>
        </section>
        <section>
          <h2>Contact</h2>
        </section>
      </main>
      <footer>
        <Link href="/">Footer</Link>
      </footer>
    </div>
  );
}
