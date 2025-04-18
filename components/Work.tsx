import Image from "next/image";

export default function Work() {
  return (
    <div className="flex flex-col">
      {/* Work */}
      <div className="flex flex-col mx-18">
        <p className="text-5xl ml-10 mt-40 pb-14">Selected Works</p>

        {/* Dash */}
        <p className="text-4xl pb-2">DASH</p>
        <p className="text-2xl text-[#A3A3A3] pb-4">Desktop App</p>
        <Image src="/images/dash.webp" alt="Dash" height={200} width={400} className="rounded-xl" />
        <div className="flex flex-row justify-between mt-10">
          <div>
            <p className="text-sm text-stone-500">EVENT</p>
            <p className="text-lg">College Project</p>
          </div>
          <div>
            <p className="text-sm text-stone-500">YEAR</p>
            <p className="text-lg">2024</p>
          </div>
        </div>
        <p className="text-sm text-stone-500 pb-2 mt-12">DESCRIPTION</p>
        <p className="text-lg mb-7">
          DASH - Distributed Adaptive Serverless Hosting offers a peer, to peer cost-effective, and
          efficient alternative for hosting serverless functions. It delivers a streamlined
          solution, designed with developers in mind providing simplicity and effectiveness without
          compromising performance.
        </p>
        <div className="flex justify-end">
          <button className="mb-20 size-16 bg-gray-800 rounded-full">#</button>
        </div>
      </div>

      {/* Flask Drive */}
      <p className="text-4xl pb-2">FLASH DRIVE</p>
      <p className="text-2xl text-[#A3A3A3] pb-4">Website</p>
      <Image src="/images/dash.webp" alt="Dash" height={200} width={400} className="rounded-xl" />
      <div className="flex flex-row justify-between mt-10">
        <div>
          <p className="text-sm text-stone-500">EVENT</p>
          <p className="text-lg">Side Project</p>
        </div>
        <div>
          <p className="text-sm text-stone-500">YEAR</p>
          <p className="text-lg">2023</p>
        </div>
      </div>
      <p className="text-sm text-stone-500 pb-2 mt-12">DESCRIPTION</p>
      <p className="text-lg mb-7">
        A Next.js web platform featuring an AI image generator with custom-trained Stable Diffusion
        model and a few other arcade games. Built with Firebase and EpicRealism image model,
        it&apos;s just a DBMS course project that evolved into a playground for implementing
        advanced web technologies.
      </p>
      <div className="flex justify-end">
        <button className="mb-20 size-16 bg-gray-800 rounded-full">#</button>
      </div>
      <div className="flex justify-center">
        <button className="text-xl h-12 w-60 rounded-full bg-[#3D3D3D]"># discover more #</button>
      </div>

      {/* Techstack */}
      <div className="hidden md:block">
        <p className="text-3xl">Tech Stacks</p>
        <div className="flex flex-wrap items-center gap-3">
          <p className="tech-stack">Next.js</p>
          <p className="tech-stack">React.js</p>
          <p className="tech-stack">Tailwind CSS</p>
          <p className="tech-stack">TypeScript</p>
          <p className="tech-stack">Python</p>
          <p className="tech-stack">MongoDB</p>
        </div>
      </div>
    </div>
  );
}
