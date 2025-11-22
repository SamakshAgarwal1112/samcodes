'use client';
import { VscChromeClose, VscChromeMaximize, VscChromeMinimize } from 'react-icons/vsc';

export default function Titlebar() {
  return (
    <div className="h-[35px] bg-vscode-titlebar border-b border-vscode-border flex items-center justify-between px-2">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 cursor-pointer" />
          <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 cursor-pointer" />
        </div>
        <span className="text-sm text-vscode-white">Samaksh Agarwal - Portfolio</span>
      </div>
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-vscode-hover text-vscode-white">
          <VscChromeMinimize size={14} />
        </button>
        <button className="p-2 hover:bg-vscode-hover text-vscode-white">
          <VscChromeMaximize size={14} />
        </button>
        <button className="p-2 hover:bg-red-600 text-vscode-white">
          <VscChromeClose size={14} />
        </button>
      </div>
    </div>
  );
}