import Link from 'next/link';

export default function Navbar(): JSX.Element {
  return (
    <nav className="sticky top-0 z-100 flex items-center justify-between px-8 h-14 bg-[#0D0F12] bg-opacity-85 backdrop-blur-12 border-b border-[#2A2F38]">
      <Link href="/" className="font-mono text-sm font-medium text-white flex items-center gap-2">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="7" height="7" rx="2" fill="#7c6aff"/>
          <rect x="10" y="1" width="7" height="7" rx="2" fill="#a78bfa" fillOpacity="0.6"/>
          <rect x="1" y="10" width="7" height="7" rx="2" fill="#a78bfa" fillOpacity="0.6"/>
          <rect x="10" y="10" width="7" height="7" rx="2" fill="#7c6aff" fillOpacity="0.3"/>
        </svg>
        <span className="text-[#7C6AFF]">NH</span>Server
      </Link>
      <div className="flex gap-6 text-sm">
        <Link href="/features" className="text-[#8892A4] hover:text-white transition-colors">Features</Link>
        <Link href="/quickstart" className="text-[#8892A4] hover:text-white transition-colors">Quick Start</Link>
        <Link href="/middleware" className="text-[#8892A4] hover:text-white transition-colors">Middleware</Link>
        <Link href="/api" className="text-[#8892A4] hover:text-white transition-colors">API</Link>
        <Link href="/roadmap" className="text-[#8892A4] hover:text-white transition-colors">Roadmap</Link>
        <a href="https://github.com/SrAndres6/NHServer" className="text-[#8892A4] hover:text-white transition-colors">GitHub</a>
      </div>
      <span className="font-mono text-xs px-2.5 py-0.75 bg-[rgba(124,106,255,0.12)] border border-[rgba(124,106,255,0.3)] rounded-[20px] text-[#A78BFA]">v1.0.0</span>
    </nav>
  );
}
