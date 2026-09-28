import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { personalDetails, contactInfo, projectsData, experienceData } from '../../data/content';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const CyberTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="space-y-1 text-xs font-mono">
          <p className="text-cyan-400 font-bold">⚡ GURU PRASATH C — INTERACTIVE DEVELOPER TERMINAL v3.0</p>
          <p className="text-slate-400">Type <span className="text-emerald-400 font-bold">help</span> to view all commands or click the shortcut chips below.</p>
        </div>
      ),
    },
  ]);

  const terminalContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (history.length > 1 && terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-amber-400 font-bold mb-1">AVAILABLE COMMANDS:</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">bio</span> - Display background & academic profile</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">experience</span> - View Appin & Titan internship experience</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">skills</span> - Display programming & MERN tech stack</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">projects</span> - View VoteMithra & Digital Bookstore</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">contact</span> - Direct email & profile links</p>
            <p><span className="text-cyan-400 w-28 inline-block font-bold">clear</span> - Clear terminal screen</p>
          </div>
        );
        break;

      case 'bio':
        outNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p className="text-cyan-400 font-bold">{personalDetails.name} — MERN Stack Developer & Competitive Programmer</p>
            <p className="text-slate-400 mt-1">{personalDetails.about}</p>
          </div>
        );
        break;

      case 'experience':
        outNode = (
          <div className="space-y-2 text-xs text-slate-300 font-mono">
            {experienceData.map((e, idx) => (
              <div key={idx} className="p-2 rounded bg-slate-900 border border-slate-800">
                <p className="text-cyan-400 font-bold">{e.role} @ {e.company} ({e.period})</p>
                <p className="text-slate-400">{e.bullets[0]}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        outNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p><span className="text-cyan-400 font-bold">Languages:</span> C, C++, Java, Python, JavaScript</p>
            <p><span className="text-emerald-400 font-bold">Frontend & Web:</span> React.js, HTML, CSS, Tailwind CSS</p>
            <p><span className="text-amber-400 font-bold">Backend & Databases:</span> Node.js, Express.js, MongoDB, MySQL</p>
            <p><span className="text-indigo-400 font-bold">Core & Tools:</span> DSA, Git, GitHub</p>
          </div>
        );
        break;

      case 'projects':
        outNode = (
          <div className="space-y-1.5 text-xs text-slate-300 font-mono">
            {projectsData.map((p) => (
              <div key={p.id}>
                <p className="text-cyan-400 font-bold">▸ {p.title} <span className="text-slate-500">({p.subtitle})</span></p>
                <p className="text-slate-400 pl-4">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outNode = (
          <div className="space-y-1 text-xs text-slate-300 font-mono">
            <p>📧 Email: <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 underline">{contactInfo.email}</a></p>
            <p>📞 Phone: <span className="text-slate-200">+91 {contactInfo.phone}</span></p>
            <p>🌐 GitHub: <a href={contactInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">{contactInfo.githubUrl}</a></p>
            <p>💼 LinkedIn: <a href={contactInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-400 underline">{contactInfo.linkedinUrl}</a></p>
          </div>
        );
        break;

      default:
        outNode = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: "{cmdStr}". Type <span className="text-cyan-400 font-bold">help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outNode }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleRunCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'bio', 'experience', 'projects', 'skills', 'contact', 'clear'];

  return (
    <div className="w-full glass-card rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl bg-slate-950/90 font-mono text-left">
      {/* Top Header */}
      <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs font-bold text-slate-400 ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            guru@prasath-dev:~ (zsh)
          </span>
        </div>

        {/* Quick Command Chips */}
        <div className="hidden sm:flex items-center gap-1.5">
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleRunCommand(cmd)}
              className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-slate-300 transition-colors border border-slate-700/60"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div ref={terminalContainerRef} className="p-4 md:p-6 space-y-4 max-h-[300px] overflow-y-auto">
        {history.map((item, index) => (
          <div key={index} className="space-y-1">
            {item.command !== 'welcome' && (
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="text-emerald-400 font-bold">guru@prasath-dev:~$</span>
                <span className="text-cyan-300 font-bold">{item.command}</span>
              </div>
            )}
            <div>{item.output}</div>
          </div>
        ))}
      </div>

      {/* Terminal Input Line */}
      <div className="px-4 py-3 bg-slate-900/50 border-t border-slate-800/80 flex items-center gap-2">
        <span className="text-xs font-bold text-emerald-400 shrink-0">guru@prasath-dev:~$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command here (e.g. help, bio, projects)..."
          className="w-full bg-transparent text-xs text-cyan-300 placeholder-slate-600 focus:outline-none font-mono"
        />
        <button
          onClick={() => handleRunCommand(inputVal)}
          className="p-1 rounded bg-slate-800 hover:bg-cyan-500 text-slate-300 hover:text-slate-950 transition-colors shrink-0"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
