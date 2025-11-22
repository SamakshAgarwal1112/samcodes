'use client';
import { VscMail, VscGithub, VscTwitter, VscCallOutgoing } from 'react-icons/vsc';
import { FaLinkedin, FaGitlab } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

export default function Connect() {
  const contactInfo = [
    {
      icon: VscMail,
      label: 'Email',
      value: 'agarwalsamaksh11@gmail.com',
      link: 'mailto:agarwalsamaksh11@gmail.com',
      color: 'text-vscode-red',
    },
    {
      icon: VscCallOutgoing,
      label: 'Phone',
      value: '+91 8979177005',
      link: 'tel:+918979177005',
      color: 'text-vscode-green',
    },
  ];

  const socials = [
    {
      icon: VscGithub,
      label: 'GitHub',
      username: 'SamakshAgarwal1112',
      link: 'https://github.com/SamakshAgarwal1112',
      color: 'text-vscode-white',
    },
    {
      icon: FaGitlab,
      label: 'GitLab',
      username: 'SamakshAgarwal1112',
      link: 'https://gitlab.com/SamakshAgarwal1112',
      color: 'text-vscode-orange',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      username: 'samaksh1agarwal',
      link: 'https://www.linkedin.com/in/samaksh1agarwal',
      color: 'text-vscode-blue',
    },
    {
      icon: VscTwitter,
      label: 'Twitter / X',
      username: 'SamakshAgg1112',
      link: 'https://x.com/SamakshAgg1112',
      color: 'text-vscode-cyan',
    },
  ];

  const cpProfiles = [
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      username: 'Samaksh1112',
      link: 'https://leetcode.com/u/Samaksh1112',
      color: 'text-vscode-orange',
    },
    {
      icon: SiCodeforces,
      label: 'Codeforces',
      username: 'samakshagarwal11',
      link: 'https://codeforces.com/profile/samakshagarwal11',
      color: 'text-vscode-blue',
    },
    {
      icon: SiCodechef,
      label: 'CodeChef',
      username: 'samaksh1112',
      link: 'https://www.codechef.com/users/samaksh1112',
      color: 'text-vscode-cyan',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8" data-testid="connect-page">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vscode-white">
          Connect <span className="text-vscode-green">_</span>
        </h1>
        <p className="text-vscode-gray text-lg">
          Let's collaborate and build something amazing together!
        </p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-vscode-white">Contact Information</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20 group"
              data-testid={`contact-${index}`}
            >
              <div className="flex items-center gap-4">
                <contact.icon
                  className={`${contact.color} group-hover:scale-110 transition-transform`}
                  size={32}
                />
                <div>
                  <p className="text-sm text-vscode-gray">{contact.label}</p>
                  <p className="text-lg text-vscode-white font-semibold">
                    {contact.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-vscode-white">Social Media</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20 group text-center"
              data-testid={`social-${index}`}
            >
              <social.icon
                className={`${social.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                size={40}
              />
              <p className="text-sm text-vscode-gray mb-1">{social.label}</p>
              <p className="text-sm text-vscode-white font-semibold">
                @{social.username}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* CP Profiles */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-vscode-white">
          Competitive Programming Profiles
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {cpProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20 group text-center"
              data-testid={`cp-profile-${index}`}
            >
              <profile.icon
                className={`${profile.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                size={40}
              />
              <p className="text-sm text-vscode-gray mb-1">{profile.label}</p>
              <p className="text-sm text-vscode-white font-semibold">
                @{profile.username}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-vscode-accent/20 to-vscode-blue/20 border border-vscode-accent rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-vscode-white mb-3">
          Let's Work Together!
        </h3>
        <p className="text-vscode-lightGray mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        <a
          href="mailto:agarwalsamaksh11@gmail.com"
          className="inline-flex items-center gap-2 bg-vscode-accent hover:bg-vscode-accentHover text-white px-8 py-3 rounded transition-colors font-semibold"
          data-testid="email-cta-btn"
        >
          <VscMail size={20} /> Send me an email
        </a>
      </div>
    </div>
  );
}
