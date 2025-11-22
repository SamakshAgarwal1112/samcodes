'use client';
import { VscLinkExternal, VscBriefcase } from 'react-icons/vsc';

export default function Experience() {
  const experiences = [
    {
      company: 'Members Co. Ltd',
      location: 'Japan',
      role: 'Full Stack Web Software Engineer',
      period: 'May 2025 - July 2025',
      type: 'Internship',
      description: [
        'Designed & Deployed an in-house performance monitoring platform on AWS, leveraging Docker containers, EC2, S3, and EventBridge.',
        'Automated mission-critical workflows and release pipelines using GitLab CI/CD, Linux CLI scripting, and AWS services, reducing manual intervention by 80%.',
        'Spearheaded the design and implementation of RESTful HTTP APIs using Django REST Framework, integrating Redis caching to decrease database load by 35%.',
      ],
      tech: ['Next.js', 'Django', 'PostgreSQL', 'AWS', 'Redis', 'Docker'],
      certificate: '#',
    },
    {
      company: 'Government of Odisha',
      location: 'India',
      role: 'Software Developer (Contractor)',
      period: 'Aug 2024 - April 2025',
      type: 'Contract',
      project: 'Load Forecast and Demand Visualization Platform',
      description: [
        'Built backend pipelines to fetch and aggregate real-time SCADA and weather data for Odisha\'s SLDC.',
        'Implemented daily, hourly, and weekly load forecasting models with scheduled cron jobs for automated prediction.',
        'Contributed to a government-facing energy monitoring dashboard under academic supervision, ensuring scalable and maintainable code.',
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'Express', 'Flask', 'PostgreSQL'],
      website: '#',
    },
    {
      company: 'Iden',
      location: 'Remote',
      role: 'SDE Intern',
      period: 'June 2024 - July 2024',
      type: 'Internship',
      description: [
        'Authored SCIM-compliant user provisioning and de-provisioning services in Python, streamlining user and resource management.',
        'Integrated various SaaS applications using API, OAuth, and browser-based methods.',
        'Implemented automation scripts and workflows with Playwright, enhancing efficiency, accuracy, and data security.',
      ],
      tech: ['Django', 'Next.js', 'Python', 'Playwright', 'OAuth'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8" data-testid="experience-page">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vscode-white">
          Experience <span className="text-vscode-green">_</span>
        </h1>
        <p className="text-vscode-gray text-lg">
          My professional journey and contributions
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20"
            data-testid={`experience-card-${index}`}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <VscBriefcase className="text-vscode-accent" size={20} />
                  <h3 className="text-2xl font-bold text-vscode-blue">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-lg text-vscode-white font-semibold">
                  {exp.company} {exp.location && `• ${exp.location}`}
                </p>
                {exp.project && (
                  <p className="text-sm text-vscode-cyan italic mt-1">
                    {exp.project}
                  </p>
                )}
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <span className="inline-block px-3 py-1 bg-vscode-accent text-white text-xs rounded mb-2">
                  {exp.type}
                </span>
                <p className="text-sm text-vscode-gray">{exp.period}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, i) => (
                <li
                  key={i}
                  className="text-vscode-lightGray text-sm leading-relaxed flex"
                >
                  <span className="text-vscode-green mr-2">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mb-3">
              {exp.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-vscode-titlebar text-vscode-cyan border border-vscode-border rounded"
                >
                  {t}
                </span>
              ))}
            </div>

            {(exp.certificate || exp.website) && (
              <div className="flex gap-3 mt-4 pt-4 border-t border-vscode-border">
                {exp.certificate && (
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-vscode-accent hover:text-vscode-accentHover transition-colors"
                  >
                    <VscLinkExternal size={14} /> View Certificate
                  </a>
                )}
                {exp.website && (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-vscode-accent hover:text-vscode-accentHover transition-colors"
                  >
                    <VscLinkExternal size={14} /> Visit Website
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold text-vscode-white">
          Education <span className="text-vscode-green">_</span>
        </h2>
        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-vscode-blue">
                Bachelor of Technology in Computer Science Engineering
              </h3>
              <p className="text-lg text-vscode-white mt-1">
                Indian Institute Of Information Technology, Design and Manufacturing
              </p>
              <p className="text-sm text-vscode-gray mt-1">
                Jabalpur, Madhya Pradesh
              </p>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <p className="text-sm text-vscode-gray">Nov. 2022 – May 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="mt-12 space-y-4">
        <h2 className="text-3xl font-bold text-vscode-white">
          Community <span className="text-vscode-green">_</span>
        </h2>
        <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold text-vscode-blue">
                Core Member - Working Committee
              </h3>
              <p className="text-lg text-vscode-white mt-1">
                The Programming Club (BitByte) • IIITDM Jabalpur
              </p>
            </div>
            <div className="mt-2 md:mt-0 md:text-right">
              <p className="text-sm text-vscode-gray">January 2024 – Present</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="text-vscode-lightGray text-sm leading-relaxed flex">
              <span className="text-vscode-green mr-2">▸</span>
              <span>Contributed as a part of a community of 300+ with a mission to enrich the coding culture of the institute.</span>
            </li>
            <li className="text-vscode-lightGray text-sm leading-relaxed flex">
              <span className="text-vscode-green mr-2">▸</span>
              <span>Organised 10+ sessions and workshops for a population of 100+ people and introduce them to the World of Web.</span>
            </li>
            <li className="text-vscode-lightGray text-sm leading-relaxed flex">
              <span className="text-vscode-green mr-2">▸</span>
              <span>Led and organized large-scale community events, including Code Rumble 2.0 (Competitive Programming) and HackByte 3.0 (Hackathon), impacting 100+ participants.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
