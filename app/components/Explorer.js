'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscChevronDown, VscChevronRight, VscFile } from 'react-icons/vsc';

export default function Explorer() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  const files = [
    { name: 'home.js', path: '/', icon: '🏠' },
    { name: 'projects.js', path: '/projects', icon: '💼' },
    { name: 'experience.js', path: '/experience', icon: '🚀' },
    { name: 'blogs.js', path: '/blogs', icon: '📝' },
    { name: 'cp-stats.js', path: '/cp-stats', icon: '🏆' },
    { name: 'connect.js', path: '/connect', icon: '📧' },
    { name: 'shortener.js', path: '/shortener', icon: '🔗' },
  ];

  return (
    <div className="w-60 bg-vscode-sidebar border-r border-vscode-border flex-col hidden lg:flex">
      <div className="p-2 text-xs text-vscode-gray uppercase tracking-wider">Explorer</div>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center gap-1 px-2 py-1 hover:bg-vscode-hover text-vscode-white text-sm"
        >
          {isOpen ? <VscChevronDown size={16} /> : <VscChevronRight size={16} />}
          <span>PORTFOLIO</span>
        </button>
        {isOpen && (
          <div className="ml-4">
            {files.map((file) => (
              <Link
                key={file.path}
                href={file.path}
                className={`flex items-center gap-2 px-4 py-1.5 hover:bg-vscode-hover text-sm transition-colors ${
                  pathname === file.path
                    ? 'bg-vscode-line text-vscode-white'
                    : 'text-vscode-lightGray'
                }`}
              >
                <span>{file.icon}</span>
                <span>{file.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}