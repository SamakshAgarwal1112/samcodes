'use client';
import { VscNotebook } from 'react-icons/vsc';

export default function Blogs() {
  return (
    <div className="max-w-4xl mx-auto space-y-8" data-testid="blogs-page">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vscode-white">
          Blogs <span className="text-vscode-green">_</span>
        </h1>
        <p className="text-vscode-gray text-lg">
          Thoughts, learnings, and insights
        </p>
      </div>

      <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-12 text-center">
        <VscNotebook className="mx-auto text-vscode-gray mb-4" size={64} />
        <h2 className="text-2xl font-bold text-vscode-white mb-2">
          Coming Soon
        </h2>
        <p className="text-vscode-gray">
          I'm working on some interesting blog posts. Stay tuned!
        </p>
        <div className="mt-6">
          <code className="text-sm text-vscode-cyan bg-vscode-titlebar px-3 py-2 rounded">
            // TODO: Write awesome content
          </code>
        </div>
      </div>
    </div>
  );
}
