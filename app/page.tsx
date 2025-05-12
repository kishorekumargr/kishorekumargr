export default function Home() {
  return (
    <main className="flex flex-col justify-center px-8 ">
      <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-14 w-full mb-10">
          <div className="flex md:w-3/4 flex-col mt-6">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2">Kishore Kumar</h1>
            <p className="text-zinc-600 dark:text-zinc-500 ">Software Developer</p>
          </div>
        </div>
      </div>
    </main>
  );
}
