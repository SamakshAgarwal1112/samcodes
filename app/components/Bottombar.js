'use client';
import { VscError, VscWarning, VscBell, VscGithubInverted } from 'react-icons/vsc';

export default function Bottombar() {
  return (
    <div className="h-[25px] bg-vscode-accent text-white flex items-center justify-between px-2 text-xs">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <VscGithubInverted size={14} />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1">
          <VscError size={14} />
          <span>0</span>
        </div>
        <div className="flex items-center gap-1">
          <VscWarning size={14} />
          <span>0</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span>Ln 1, Col 1</span>
        <span>JavaScript</span>
        <span>UTF-8</span>
        <VscBell size={14} />
      </div>
    </div>
  );
}