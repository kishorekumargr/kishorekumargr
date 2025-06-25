export default function Home() {
  return (
    <main className="flex flex-col mx-auto mt-20 md:mt-28 md:p-0 px-8 max-w-2xl text-white">
      <div>
        <h1 className="font-bold text-5xl tracking-tight">Kishore Kumar</h1>
        <p className="text-[#9BA3AF] text-xl">Software Developer</p>
      </div>
      <div>
        <h2>About</h2>
        <p>I&apos;am a Full Stack Developer</p>
      </div>
      <div>
        <h2>Work Experience</h2>
        <p>Freelancer</p>
      </div>
      <div>
        <h2>Education</h2>
        <div className="card">
          <h3>SRM University</h3>
          <p>Bachelor of Computer Applications 2025 - Present</p>
        </div>
      </div>
      <div>
        <h2>Skills</h2>
        <p>Nextjs</p>
        <p>Tailwind</p>
      </div>
      <div>
        <h2>Projects</h2>
        <p>Amazon-Clone</p>
        <p>Apple-Clone</p>
      </div>
    </main>
  );
}
