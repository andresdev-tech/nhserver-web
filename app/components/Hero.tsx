'use client';

import { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard.writeText('npm install nhserver').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="max-w-[820px] mx-auto px-8 py-[100px] text-center">
      <p className="font-mono text-sm text-[#7C6AFF] tracking-[0.08em] uppercase mb-6">
        Node.js Web Framework
      </p>
      <h1 className="text-[clamp(2.4rem,5vw,4rem)] font-semibold leading-[1.1] tracking-[-0.03em] mb-5">
        Build APIs faster.<br/>
        Ship with <span className="text-[#A78BFA]">zero deps</span>.
      </h1>
      <p className="text-lg text-[#8892A4] max-w-[560px] mx-auto mb-10">
        NHServer es un micro-framework web para Node.js — enrutamiento, middleware integrado y respuestas estructuradas. Sin dependencias externas.
      </p>
      <div className="flex gap-3 justify-center flex-wrap mb-0">
        <a href="#quickstart" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] text-sm font-medium bg-[#7C6AFF] text-white border border-[#7C6AFF] hover:bg-[#A78BFA] hover:border-[#A78BFA] transition-all">
          Comenzar →
        </a>
        <a href="https://github.com/SrAndres6/NHServer" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] text-sm font-medium bg-transparent text-white border border-[#2A2F38] hover:border-[#8892A4] transition-all">
          Ver en GitHub
        </a>
      </div>
      <div className="flex items-center justify-center gap-0 max-w-[480px] mx-auto mt-15 bg-[#111318] border border-[#2A2F38] rounded-[10px] overflow-hidden">
        <span className="px-4 py-3 font-mono text-sm text-[#34D399] border-r border-[#2A2F38] whitespace-nowrap">$</span>
        <span className="flex-1 px-4 py-3 font-mono text-sm text-white bg-transparent border-none">npm install nhserver</span>
        <button onClick={copyInstall} className="px-3.5 py-3 border-none bg-transparent cursor-pointer text-[#8892A4] text-base hover:text-white transition-colors">
          {copied ? '✓' : '⧉'}
        </button>
      </div>
    </div>
  );
}
