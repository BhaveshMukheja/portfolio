"use client"; // Ensures this component only renders on the client side (Next.js)

import Image from "next/image";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { FaBook, FaDev } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { GiArtificialHive } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoMusicalNote, IoPlanet } from "react-icons/io5";

// Define the type for terminal entries
type TerminalEntry =
  | { type: "command"; content: string }
  | { type: "output"; content: string }
  | { type: "component"; content: React.ReactNode };

// Placeholder command map (expandable for simpler outputs)
const commandMap: Record<string, string> = {
  // e.g., about: 'This is a CLI portfolio',
};

type GifCommand = {
  gif: string;
  text: string;
};


const gifCommands: Record<string, GifCommand> = {
  "npm install": {
    gif: "https://media1.tenor.com/m/Oe2I42VOuMoAAAAd/npm-install.gif",
    text: "Oh you want to install Packages! Here you GO!",
  },
  "git push": {
    gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2g2NTZhajRmbWpnazBkb3VsNWtqbHczcm1hemJyZ3N5aWU4em14ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UCprfrXABmEKG1a8SE/giphy.gif",
    text: "I AM TRYING!",
  },
  "git add": {
    gif: "https://media1.tenor.com/m/c4YEuiMQfBAAAAAd/ryan-howard-bj-novak.gif",
    text: "DONE!",
  },
  "my dream": {
    gif: "https://media1.tenor.com/m/BEsL9FFFGN4AAAAd/the-office-michael-scott.gif",
    text: "",
  },
  "kill": {
    gif: "https://media1.tenor.com/m/T9ggIIvCZ_EAAAAC/the-office-gun.gif",
    text: "HA! Got ya First!",
  },
};


// Terminal component
const Terminal: React.FC = () => {
  const [input, setInput] = useState(""); // Input field value
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: "component",
      content: (
        <div>
          {/* Welcome Message */}
          <div className="text-white inline-flex">
            Thanks for visiting my{" "}
            <p className="text-cyan-400 uppercase ml-2">portfolio</p>
          </div>
          <div className="text-white inline-flex">
            I will be more than happy to hear your reviews or suggestions
          </div>
          <span className="text-white inline-flex">
            You can find my{" "}
            <p className="text-fuchsia-400 mx-2">social media</p> links at the
            bottom of the phone. <p className="text-red-400 mx-2">See ya!</p>
          </span>

          <div className="text-white inline-flex mt-6">
            Type <p className="text-green-500 mx-2 ">'help'</p> to know the
            commands available
          </div>
        </div>
      ),
    },
  ]);

  const [commandHistory, setCommandHistory] = useState<string[]>([]); // Stores previous commands
  const [historyIndex, setHistoryIndex] = useState<number | null>(null); // For arrow key navigation
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the input field
  const bottomRef = useRef<HTMLDivElement>(null); // To auto-scroll to latest entry
  const terminalBodyRef = useRef<HTMLDivElement>(null); // Scrollable terminal body

  // Scrolls terminal to bottom when history changes
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history]);

  // Executes the logic for each command typed
  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    // Save command to history
    setCommandHistory((prev) => [...prev, cmd]);
    setHistory((prev) => [...prev, { type: "command", content: `$ ${cmd}` }]);

    // Command: clear terminal
    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    // Command: about me
    if (cmd === "about me") {
      const componentOutput = (
        <div className="p-3 rounded text-gray-300">
          To know more about me, you can click{" "}
          <a className="text-violet-500" href="/coming_soon?tab=about">
            HERE
          </a>
        </div>
      );
      setHistory((prev) => [...prev, { type: "component", content: componentOutput }]);
      return;
    }

    // Command: help
    if (cmd === "help") {
      const componentOutput = (
        <div className="p-3 rounded">
          <p className="text-fuchsia-400">commands available:</p>
          <ul className="text-white">
            <li>help</li>
            <li>hello</li>
            <li>about me</li>
            <li>facts</li>
            <li>my dream</li>
            <li>git push</li>
            <li>git add</li>
            <li>npm install</li>
            <li>kill</li>
            <li>clear</li>
          </ul>
        </div>
      );
      setHistory((prev) => [...prev, { type: "component", content: componentOutput }]);
      return;
    }

    // Meme/GIF responses
    // const gifCommands: Record<string, Object> = {
    //   "npm install": {gif:"https://media1.tenor.com/m/Oe2I42VOuMoAAAAd/npm-install.gif", text:"Oh you want to install Packages! Here you GO!"},
    //   "git push": {gif:"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2g2NTZhajRmbWpnazBkb3VsNWtqbHczcm1hemJyZ3N5aWU4em14ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UCprfrXABmEKG1a8SE/giphy.gif",text:"I AM TRYING!"}
    //   "git add": {gif: "https://media1.tenor.com/m/c4YEuiMQfBAAAAAd/ryan-howard-bj-novak.gif", text:"DONE!"},
    //   "my dream": {gif:"https://media1.tenor.com/m/BEsL9FFFGN4AAAAd/the-office-michael-scott.gif",text:""}
    //   "kill": {gif:"https://media1.tenor.com/m/T9ggIIvCZ_EAAAAC/the-office-gun.gif",text:"HA! Got ya First!}"
    // };

    if (gifCommands[cmd]) {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white">
          <div>
            {gifCommands[cmd].text}
          </div>
          <Image
            unoptimized
            src={gifCommands[cmd].gif}
            className="object-cover w-full h-[300px]"
            width={50}
            height={100}
            alt="command gif"
          />
        </div>
      );
      setHistory((prev) => [...prev, { type: "component", content: componentOutput }]);
      return;
    }

    // Command: facts
    if (cmd === "facts") {
      const componentOutput = (
        <div className="p-3 rounded mt-2">
          <p className="text-fuchsia-400"> Here are some facts about me:</p>
          <ul className="text-white">
            <li className="flex"><FaDev className="mt-1 mr-1" /> Full-Stack Developer</li>
            <li className="flex"><GiArtificialHive className="mt-1 mr-1" /> AI Researcher</li>
            <li className="flex"><IoPlanet className="mt-1 mr-1" /> Astrophysicist</li>
            <li className="flex"><IoIosMusicalNotes className="mt-1 mr-1" /> Musician</li>
            <li className="flex"><FaBook className="mt-1 mr-1" /> Nerd for The Office</li>
          </ul>
        </div>
      );
      setHistory((prev) => [...prev, { type: "component", content: componentOutput }]);
      return;
    }

    // Command: hello
    if (cmd === "hello") {
      const commandOutput = "Hello!";
      setHistory((prev) => [...prev, { type: "output", content: commandOutput }]);
      return;
    }

    // Fallback: unknown command
    const output = commandMap[cmd] ?? `Command not found: ${cmd}`;
    setHistory((prev) => [...prev, { type: "output", content: output }]);
  };

  // Keyboard handling for terminal input
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
      setHistoryIndex(null);
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === null
            ? commandHistory.length - 1
            : Math.max(historyIndex - 1, 0);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex !== null) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        } else {
          setHistoryIndex(null);
          setInput("");
        }
      }
    }
  };

  // Terminal UI rendering
  return (
    <div className="bg-black p-4 w-full max-w-2xl font-mono rounded-xl shadow-lg mx-auto">
      
      {/* Top bar (Mac style) */}
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Terminal history display */}
      <div
        ref={terminalBodyRef}
        className="overflow-y-auto h-[500px] mb-4 pr-2 space-y-2"
      >
        {history.map((entry, idx) =>
          entry.type === "component" ? (
            <div key={idx}>{entry.content}</div>
          ) : (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                entry.type === "command" ? "text-cyan-400" : "text-gray-300"
              }`}
            >
              {entry.content}
            </div>
          )
        )}
        <div ref={bottomRef} />
      </div>

      {/* Terminal input prompt */}
      <div className="flex items-center">
        <span className="text-cyan-400">
          $
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-black text-white ml-2 flex-grow outline-none"
            placeholder="Type a command..."
          />
        </span>
      </div>
    </div>
  );
};

export default Terminal;
