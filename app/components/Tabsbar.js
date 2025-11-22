'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { VscClose } from 'react-icons/vsc';

export default function Tabsbar() {
  const pathname = usePathname();

  const tabs = [
    { name: 'home.js', path: '/', icon: '🏠' },
    { name: 'projects.js', path: '/projects', icon: '💼' },
    { name: 'experience.js', path: '/experience', icon: '🚀' },
    { name: 'blogs.js', path: '/blogs', icon: '📝' },
    { name: 'cp-stats.js', path: '/cp-stats', icon: '🏆' },
    { name: 'connect.js', path: '/connect', icon: '📧' },
  ];

  return (
    <div className="bg-vscode-sidebar border-b border-vscode-border flex overflow-x-auto">
      {tabs.map((tab) => (
        <Link
          key={tab.path}
          href={tab.path}
          className={`flex items-center gap-2 px-4 py-2 text-sm border-r border-vscode-border hover:bg-vscode-hover transition-colors ${
            pathname === tab.path
              ? 'bg-vscode-bg text-vscode-white border-t-2 border-t-vscode-accent'
              : 'text-vscode-gray'
          }`}
        >
          <span>{tab.icon}</span>
          <span className="whitespace-nowrap">{tab.name}</span>
        </Link>
      ))}
    </div>
  );
}