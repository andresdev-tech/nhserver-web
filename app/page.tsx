import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-[#0D0F12] text-white">
      <nav className="w-full h-20">
        
      </nav>

      <main className="w-full h-full flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-1xl font-bold text-[#7C6AFF]">NODE.JS WEB FRAMEWORK</h1>
        <p className="text-4xl font-bold">Build APIs faster. Ship with <span className='text-[#A78BFA]'>zero deps</span>.</p>
        <p className='text-xl text-gray-400'>NHServer es un micro-framework web para Node.js — enrutamiento, middleware integrado y respuestas estructuradas. Sin dependencias externas.</p>


        <div className='flex gap-4 p-6 m-4'>

          <Link href={''} className='bg-[#7C6AFF] h-15 w-40 rounded-2xl cursor-pointer'>
            Get started
          </Link>

          <Link href='https://github.com/andresdev-tech/nhserver' className='text-center rounded-2xl border-4 border-[#2A2F38] h-15 w-40 cursor-pointer'>
            View on GitHub
          </Link>
        </div>

        <div>

        </div>
      </main>

      <footer className="w-full h-20 flex items-center justify-center">
        <p className="text-sm text-gray-400">Copyright 2026 NHServer</p>
      </footer>
    </div>
  );
}
