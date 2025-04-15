import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col items-center mt-80">
      <div className="flex flex-col gap-4 text-2xl pt-4 pb-10">
        <Link href="https://github.com/grkisho">Github</Link>
        <Link href="">Linkedin</Link>
        <Link href="">Email</Link>
        <Link href="">Resume</Link>
      </div>
      <div>
        <p className="text-xl">Back To Top</p>
        <p className="text-xl mx-7 mt-20 mb-30">
          Like I always say cant find a door Make your own.
        </p>
        <p className="text-lg">Kishore Kumar 2025.</p>
      </div>
    </div>
  );
}
