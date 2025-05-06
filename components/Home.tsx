import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2">Kishore Kumar</h1>
        <p className="text-lg">Software Engineer Building Saas products and web apps.</p>
      </div>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Recent Blogs
      </h3>

      <Link href="/">Ace the Javascript Interview</Link>
      <Link href="/">Free portfolio website template</Link>
      <Link href="/">See All Blogs</Link>

      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mg-4 mt-8 text-black dark:text-white">
        Projects
      </h3>

      <div>
        <h1>Upcoming Projects</h1>
      </div>
    </main>
  );
}
