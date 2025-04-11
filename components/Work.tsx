import Image from "next/image";

export default function Work() {
  return (
    <>
      <div className="flex flex-col mx-18">
        <p className="text-4xl pb-2">DASH</p>
        <p className="text-2xl text-stone-400 pb-4">Desktop App</p>
        <Image src="/images/dash.webp" alt="Dash" height={200} width={400} className="rounded-xl" />
        <div className="flex flex-row justify-between mt-10">
          <div>
            <p className="text-sm text-stone-500">TYPE</p>
            <p className="text-lg">Desktop App</p>
          </div>
          <div>
            <p className="text-sm text-stone-500">EVENT</p>
            <p className="text-lg">College Project Main</p>
          </div>
          <div>
            <p className="text-sm text-stone-500">YEAR</p>
            <p className="text-lg">2044</p>
          </div>
        </div>
        <p className="text-sm text-stone-500 pb-2 mt-12">DESCRIPTION</p>
        <p className="text-lg mb-7">
          DASH - Distributed Adaptive Serverless Hosting offers a peer to peer, cost-effective, and
          efficient alternative for hosting serverless functions. It delivers a streamlined
          solution, designed with developers in mind providing simplicity and effectiveness without
          compromising performance.
        </p>
        <div className="flex justify-end">
          <button className="mb-20 size-16 bg-gray-800 rounded-full">A</button>
        </div>
        <div className="flex justify-center">
          <button className="text-xl h-12 w-60 rounded-full bg-neutral-700">discover more</button>
        </div>
      </div>
    </>
  );
}
