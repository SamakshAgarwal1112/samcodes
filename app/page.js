'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight, VscGithub, VscTwitter } from 'react-icons/vsc';
import { FaLinkedin, FaGitlab } from 'react-icons/fa';

export default function Home() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: 'const developer = {', type: 'function' },
    { code: '  name: "Samaksh Agarwal",', type: 'property' },
    { code: '  role: "Full Stack Developer",', type: 'property' },
    { code: '  education: "IIITDM Jabalpur",', type: 'property' },
    { code: '  passion: "Building & Learning",', type: 'property' },
    { code: '  skills: [', type: 'array' },
    { code: '    "React", "Next.js", "Node.js",', type: 'array-item' },
    { code: '    "Django", "Flask", "PostgreSQL",', type: 'array-item' },
    { code: '    "C++", "Python", "JavaScript"', type: 'array-item' },
    { code: '  ],', type: 'array-end' },
    { code: '  currentFocus: "Full Stack Development",', type: 'property' },
    { code: '};', type: 'close' },
    { code: '', type: 'blank' },
    { code: 'developer.build(); // 🚀', type: 'comment' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-16 px-4 py-8 lg:py-0">
      <div className="w-full lg:w-1/2 max-w-2xl">
        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg overflow-hidden shadow-2xl">
          <div className="bg-vscode-titlebar px-4 py-2 flex items-center gap-2 border-b border-vscode-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-xs sm:text-sm text-vscode-gray ml-2">developer.js</span>
          </div>
          <div className="flex overflow-x-auto codebox-bar">
            <div className="bg-vscode-titlebar p-2 xs:p-3 sm:p-4 text-right text-vscode-gray text-[10px] xs:text-xs sm:text-sm select-none">
              {codeLines.map((_, index) => (
                <div
                  key={index}
                  className={`leading-4 xs:leading-5 sm:leading-6 ${
                    index === activeLineIndex ? 'text-vscode-white' : ''
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="flex-1 p-2 xs:p-3 sm:p-4 text-[10px] xs:text-xs sm:text-sm font-mono">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className={` leading-4 xs:leading-5 sm:leading-6 transition-all duration-300 whitespace-pre ${
                    index === activeLineIndex
                      ? 'bg-vscode-line pl-2 -ml-2'
                      : ''
                  }`}
                >
                  <span
                    className={`${
                      line.type === 'function' || line.type === 'close'
                        ? 'syntax-keyword'
                        : line.type === 'property'
                        ? 'syntax-property'
                        : line.type === 'array' ||
                          line.type === 'array-item' ||
                          line.type === 'array-end'
                        ? 'syntax-string'
                        : line.type === 'comment'
                        ? 'syntax-comment'
                        : 'text-vscode-white'
                    }`}
                  >
                    {line.code || ' '}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-xl space-y-4 sm:space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-vscode-white mb-2">
            Samaksh <span className="text-vscode-accent">Agarwal</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-vscode-blue font-semibold">
            Full Stack Developer
          </p>
          <p className="text-xs sm:text-sm text-vscode-gray mt-1">
            BTech CSE @ IIITDM Jabalpur
          </p>
        </div>

        <p className="text-vscode-lightGray text-sm sm:text-base lg:text-lg leading-relaxed">
          Average curious minded fella who's outspoken and always eager to learn new things. 
          Building modern web experiences with clean code and intuitive design.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-vscode-accent hover:bg-vscode-accentHover text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded transition-colors"
            data-testid="view-projects-btn"
          >
            View Projects <VscArrowRight size={20} />
          </Link>
          <Link
            href="/connect"
            className="flex items-center gap-2 bg-vscode-sidebar hover:bg-vscode-hover text-vscode-white border border-vscode-border px-5 py-2.5 sm:px-6 sm:py-3 rounded transition-colors"
            data-testid="contact-btn"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex items-center gap-4 sm:gap-5 pt-2 sm:pt-4">
          <a
            href="https://github.com/SamakshAgarwal1112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vscode-gray hover:text-vscode-white transition-colors"
            data-testid="github-link"
          >
            <VscGithub size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://gitlab.com/SamakshAgarwal1112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vscode-gray hover:text-vscode-white transition-colors"
            data-testid="gitlab-link"
          >
            <FaGitlab size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/samaksh1agarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vscode-gray hover:text-vscode-white transition-colors"
            data-testid="linkedin-link"
          >
            <FaLinkedin size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href="https://x.com/SamakshAgg1112"
            target="_blank"
            rel="noopener noreferrer"
            className="text-vscode-gray hover:text-vscode-white transition-colors"
            data-testid="twitter-link"
          >
            <VscTwitter size={24} className="sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}
