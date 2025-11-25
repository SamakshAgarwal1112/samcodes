'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VscFiles, VscSearch, VscSourceControl, VscDebugAlt, VscExtensions, VscAccount, VscSettingsGear } from 'react-icons/vsc';

export default function Sidebar() {
  const pathname = usePathname();

  const icons = [
    { Icon: VscFiles, path: '/', label: 'Explorer' },
    { Icon: VscSearch, path: '/search', label: 'Search' },
    { Icon: VscSourceControl, path: '/projects', label: 'Projects' },
    { Icon: VscDebugAlt, path: '/experience', label: 'Experience' },
    { Icon: VscExtensions, path: '/cp-stats', label: 'CP Stats' },
    { Icon: VscAccount, path: '/connect', label: 'Connect' },
    { Icon: VscSettingsGear, path: '/settings', label: 'Settings' },
  ];

  return (
    <div className="w-[50px] bg-vscode-titlebar border-r border-vscode-border flex flex-col items-center py-4 gap-4">
      {icons.map(({ Icon, path, label }) => (
        <Link
          key={path}
          href={path}
          className={`p-3 hover:bg-vscode-hover rounded transition-colors group relative ${
            pathname === path ? 'text-vscode-accent' : 'text-vscode-gray'
          }`}
          title={label}
        >
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          {pathname === path && (
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-vscode-accent" />
          )}
        </Link>
      ))}
    </div>
  );
}