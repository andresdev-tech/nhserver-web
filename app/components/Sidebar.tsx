'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  href: string;
  label: string;
}

export default function Sidebar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/quickstart', label: 'Quick Start' },
    { href: '/middleware', label: 'Middleware' },
    { href: '/api', label: 'API' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#13161A] border border-[#2A2F38] rounded-lg text-white"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {isOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <path d="M3 12h18" />
              <path d="M3 6h18" />
              <path d="M3 18h18" />
            </>
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0D0F12] border-r border-[#2A2F38] z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <Link href="/" className="font-mono text-sm font-medium text-white flex items-center gap-2 mb-8">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1" y="1" width="7" height="7" rx="2" fill="#7c6aff"/>
              <rect x="10" y="1" width="7" height="7" rx="2" fill="#a78bfa" fillOpacity="0.6"/>
              <rect x="1" y="10" width="7" height="7" rx="2" fill="#a78bfa" fillOpacity="0.6"/>
              <rect x="10" y="10" width="7" height="7" rx="2" fill="#7c6aff" fillOpacity="0.3"/>
            </svg>
            <span className="text-[#7C6AFF]">NH</span>Server
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                  pathname === item.href
                    ? 'bg-[#7C6AFF] text-white'
                    : 'text-[#8892A4] hover:text-white hover:bg-[#13161A]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-[#2A2F38]">
            <a
              href="https://github.com/SrAndres6/NHServer"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#8892A4] hover:text-white transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>

          <div className="mt-6">
            <span className="font-mono text-xs px-2.5 py-0.75 bg-[rgba(124,106,255,0.12)] border border-[rgba(124,106,255,0.3)] rounded-[20px] text-[#A78BFA]">
              v1.0.0
            </span>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}
    </>
  );
}
