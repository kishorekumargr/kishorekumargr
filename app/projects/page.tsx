import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <div className="mb-16">
        <h1>Projects</h1>
        <h2 className="text-gray-600 dark:text-gray-400 mb-16">
          I’ve developed commercial projects as well as hobby projects. All projects are included
          (along with course related projects) here. –{" "}
          <Link href="/blog" className="text-blue-500 hover:underline">
            checkout my blog{" "}
          </Link>{" "}
          while you&apos;re here.
          <br /> I write about technology, learning and memes.
        </h2>
        <h3>Full Stack</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
      </div>
      <div className=" flex flex-col items-start dark:border-gray-800 rounded p-4 relative">
        <div className="my-4">
          <svg
            className="h-8 w-12 min-w-lg text-gray-900 dark:text-gray-100"
            id="SvgjsSvg1001"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 82.43954467773438 36.907936096191406"
          >
            <defs id="SvgjsDefs1002"></defs>
            <rect
              id="SvgjsRect1008"
              width="82.43954467773438"
              height="36.907936096191406"
              fill="none"
            ></rect>
            <g id="SvgjsG1009" transform="matrix(1,0,0,1,-28.194570541381836,-64.04541778564453)">
              <title>0578_ink_pen_verti</title>
              <path
                id="color_1"
                d="M110.63412,80.395c-.1825-.02539-18.34884-2.69087-27.68421-15.47783l-.63669-.87175H28.19457v36.90794H82.31322l.63669-.87176c9.33537-12.78754,27.50171-15.45243,27.68362-15.47783l-.29-2.10379ZM60.853,81.43629H47.71166V68.29555H60.853ZM32.44468,83.56194H45.5866V96.70327H32.44468ZM80.17576,96.70327H65.1031V68.29555H80.17576a42.1149,42.1149,0,0,0,15.99168,12.0788H80.5514a4.68191,4.68191,0,1,0,0,4.25012H96.16684A42.11772,42.11772,0,0,0,80.17576,96.70327Z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
        <div>
          <h4 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Moonbeam
          </h4>
          <p className="leading-6 pt-4 text-gray-700 dark:text-gray-300">
            Never write from scratch again. Kickstart your next great writing piece with Moonbeam.
            Your long-form writing AI assistant.
          </p>
          <div className="pt-4 flex md:flex-row flex-wrap">
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              Front-end
            </p>
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              GPT-3
            </p>
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              Next.js
            </p>
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              React
            </p>
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              TailwindCSS
            </p>
            <p className="leading-5 mb-2 dark:border dark:border-zinc-700 text-gray-700 dark:text-gray-300 dark:bg-transparent rounded-md text-xs italic bg-gray-50  mr-2 px-1">
              Chrome Extension
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
