'use client';
import { VscGithub } from 'react-icons/vsc';

export default function Projects() {
  const projects = [
    {
      title: 'Jeremy - Async Cache Proxy',
      description: 'Developed a prototype cache proxy that sits between clients and upstream servers, intercepting and caching requests to reduce network round-trips. Explored proxy design patterns, socket-level connection handling, and cache invalidation strategies.',
      tech: ['C++', 'Socket Programming', 'Caching', 'Proxy Design'],
      github: 'https://github.com/SamakshAgarwal1112/Jeremy',
      tags: ['Backend', 'Performance'],
    },
    {
      title: 'VulTURE - Vulnerability Tester',
      description: 'Collaborated in a team of four to develop a comprehensive tool that detects 100+ website vulnerabilities for user safety. Created the frontend and backend of the platform, providing a user-friendly interface for security testing.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Flask'],
      github: 'https://github.com/VulTURE-HackByte',
      tags: ['Full Stack', 'Security'],
    },
    {
      title: 'Goss - grep-like utility',  
      description: 'Goss is a grep-like utility written in C++, aiming to mirror and experiment with clean and optimized string matching algorithms behind grep. Algorithms invloved are Knuth Morris Pratt, Boyer Moore, Aho-corasick, etc.',
      tech: ['C++', 'String Matching Algorithms', 'Commentz-Walter'],
      github: 'https://github.com/SamakshAgarwal1112/goss',
      tags: ['Backend', 'Algorithms'],
    },
    {
      title: 'Mini - custom compiler',
      description: 'Mini is a custom educational compiler project for a subset of a simple programming language, implementing core phases like lexical analysis, parsing, semantic checking, and code generation.',
      tech: ['Flex(Lexer)', 'Bison(Parser)'],
      github: 'https://github.com/SamakshAgarwal1112/mini',
      tags: ['Compiler Design', 'Lex', 'Yacc'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8" data-testid="projects-page">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vscode-white">
          Projects <span className="text-vscode-green">_</span>
        </h1>
        <p className="text-vscode-gray text-lg">
          Some of my notable projects and experiments
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20 group"
            data-testid={`project-card-${index}`}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-bold text-vscode-blue group-hover:text-vscode-accent transition-colors">
                {project.title}
              </h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-gray hover:text-vscode-white transition-colors"
              >
                <VscGithub size={20} />
              </a>
            </div>

            <p className="text-vscode-lightGray text-sm mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-vscode-titlebar text-vscode-cyan border border-vscode-border rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 text-vscode-yellow"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
