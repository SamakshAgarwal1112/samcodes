'use client';
import { useEffect } from 'react';
import Titlebar from './Titlebar';
import Sidebar from './Sidebar';
import Explorer from './Explorer';
import Bottombar from './Bottombar';
import Tabsbar from './Tabsbar';

export default function ClientLayout({ children }) {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'vscode-dark';
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <>
      <Titlebar />
      <div className="flex h-[calc(100dvh-60px)]">
        <Sidebar />
        <Explorer />
        <div className="flex-1 flex flex-col overflow-x-hidden">
          <Tabsbar />
          <main className="flex-1 overflow-y-auto px-4 pt-4 pb-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
}
