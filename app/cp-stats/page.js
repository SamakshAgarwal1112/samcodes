'use client';
import { useState, useEffect } from 'react';
import { VscLoading, VscTrophy, VscFlame } from 'react-icons/vsc';

export default function CPStats() {
  const [stats, setStats] = useState({
    leetcode: { loading: true, data: null, error: null },
    codeforces: { loading: true, data: null, error: null },
    codechef: { loading: true, data: null, error: null },
  });

  useEffect(() => {
    // Fetch LeetCode stats
    fetch('/api/cp-stats/leetcode')
      .then((res) => res.json())
      .then((data) => setStats((prev) => ({ 
        ...prev, 
        leetcode: { loading: false, data, error: null } 
      })))
      .catch((error) => setStats((prev) => ({ 
        ...prev, 
        leetcode: { loading: false, data: null, error: error.message } 
      })));

    // Fetch Codeforces stats
    fetch('/api/cp-stats/codeforces')
      .then((res) => res.json())
      .then((data) => setStats((prev) => ({ 
        ...prev, 
        codeforces: { loading: false, data, error: null } 
      })))
      .catch((error) => setStats((prev) => ({ 
        ...prev, 
        codeforces: { loading: false, data: null, error: error.message } 
      })));

    // Fetch CodeChef stats
    fetch('/api/cp-stats/codechef')
      .then((res) => res.json())
      .then((data) => setStats((prev) => ({ 
        ...prev, 
        codechef: { loading: false, data, error: null } 
      })))
      .catch((error) => setStats((prev) => ({ 
        ...prev, 
        codechef: { loading: false, data: null, error: error.message } 
      })));
  }, []);

  const StatCard = ({ platform, username, data, loading, error, color, url }) => (
    <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 hover:border-vscode-accent transition-all hover:shadow-lg hover:shadow-vscode-accent/20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className={`text-2xl font-bold ${color}`}>{platform}</h3>
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-vscode-gray hover:text-vscode-accent transition-colors"
          >
            @{username}
          </a>
        </div>
        <VscTrophy className={color} size={32} />
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <VscLoading className="animate-spin text-vscode-accent" size={32} />
        </div>
      ) : error ? (
        <div className="text-vscode-red text-sm">
          Failed to load stats. Please try again later.
        </div>
      ) : data ? (
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-vscode-gray text-sm">Current Rating</span>
            <span className={`text-lg font-bold ${color}`}>{data.rating || 'N/A'}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-vscode-gray text-sm">Highest Rating</span>
            <span className="text-vscode-white font-semibold">{data.maxRating || 'N/A'}</span>
          </div>
          {data.title && (
            <div className="flex justify-between items-center">
              <span className="text-vscode-gray text-sm">Title</span>
              <span className="text-vscode-yellow font-semibold">{data.title}</span>
            </div>
          )}
          {data.contestsRating && (
            <div className="flex justify-between items-center">
              <span className="text-vscode-gray text-sm">Contests Rating</span>
              <span className="text-vscode-white font-semibold">{data.contestsRating}</span>
            </div>
          )}
          {data.problemsSolved !== undefined && (
            <div className="flex justify-between items-center">
              <span className="text-vscode-gray text-sm">Problems Solved</span>
              <span className="text-vscode-green font-semibold">{data.problemsSolved}</span>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto space-y-8" data-testid="cp-stats-page">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-vscode-white">
          CP Stats <span className="text-vscode-green">_</span>
        </h1>
        <p className="text-vscode-gray text-lg">
          Competitive Programming achievements across platforms
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          platform="LeetCode"
          username="Samaksh1112"
          data={stats.leetcode.data}
          loading={stats.leetcode.loading}
          error={stats.leetcode.error}
          color="text-vscode-orange"
          url="https://leetcode.com/u/Samaksh1112"
        />
        <StatCard
          platform="Codeforces"
          username="samakshagarwal11"
          data={stats.codeforces.data}
          loading={stats.codeforces.loading}
          error={stats.codeforces.error}
          color="text-vscode-blue"
          url="https://codeforces.com/profile/samakshagarwal11"
        />
        <StatCard
          platform="CodeChef"
          username="samaksh1112"
          data={stats.codechef.data}
          loading={stats.codechef.loading}
          error={stats.codechef.error}
          color="text-vscode-cyan"
          url="https://www.codechef.com/users/samaksh1112"
        />
      </div>

      <div className="bg-vscode-sidebar border border-vscode-border rounded-lg p-6 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <VscFlame className="text-vscode-orange" size={24} />
          <h2 className="text-2xl font-bold text-vscode-white">Achievements</h2>
        </div>
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-vscode-green mr-2">▸</span>
            <span className="text-vscode-lightGray">
              <span className="text-vscode-yellow font-semibold">Winner</span> at MLH Hackathon hackCBS 7.0
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-vscode-green mr-2">▸</span>
            <span className="text-vscode-lightGray">
              <span className="text-vscode-cyan font-semibold">2nd Runner-up</span> in IdeaTON Sponsored track
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-vscode-green mr-2">▸</span>
            <span className="text-vscode-lightGray">
              Built TicketChain - Decentralized event ticketing platform using Web3
            </span>
          </li>
        </ul>
      </div>

      <div className="text-center text-vscode-gray text-sm mt-6">
        <code className="bg-vscode-titlebar px-3 py-2 rounded">
          // Stats updated in real-time from official APIs
        </code>
      </div>
    </div>
  );
}
