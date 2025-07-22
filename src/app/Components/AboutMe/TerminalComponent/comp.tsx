"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { FaBook, FaDev } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { GiArtificialHive } from "react-icons/gi";
import { IoIosMusicalNotes } from "react-icons/io";
import { IoMusicalNote, IoPlanet } from "react-icons/io5";

type TerminalEntry =
  | { type: "command"; content: string }
  | { type: "output"; content: string }
  | { type: "component"; content: React.ReactNode };

const commandMap: Record<string, string> = {
  // about: 'To check more about me you can click here: ',
};

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      type: "component",
      content: (
        <div>
          <div className="text-white inline-flex">
            Thanks for visiting my{" "}
            <p className="text-cyan-400 uppercase ml-2">portfolio</p>
          </div>
          <span className="text-white inline-flex">
            You can find my{" "}
            <p className="text-fuchsia-400 mx-2">social media</p> links at the
            bottom of the phone
          </span>
          <div className="text-white inline-flex">
            Type <p className="text-green-500 mx-2"> 'help' </p>to know the
            commands available
          </div>
        </div>
      ),
    },
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when history updates
useEffect(() => {
  if (terminalBodyRef.current) {
    terminalBodyRef.current.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth"
    });
  }
}, [history]);


  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    setCommandHistory((prev) => [...prev, cmd]);
    setHistory((prev) => [...prev, { type: "command", content: `$ ${cmd}` }]);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    if (cmd === "about me") {
      const componentOutput = (
        <div className="p-3 rounded text-gray-300">
          To know more about me, you can click{" "}
          <a className="text-violet-500" href="/">
            HERE
          </a>
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

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
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "npm install") {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white">
          Oh! You want to install the packages? Here you GO!
          <Image
            unoptimized
            src="https://media1.tenor.com/m/Oe2I42VOuMoAAAAd/npm-install.gif"
            className="object-cover w-full h-[300px]"
            width={"50"}
            height={"100"}
            alt="kya hua"
          />
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "git push") {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white font-bold">
          I AM TRYING!
          <Image
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2g2NTZhajRmbWpnazBkb3VsNWtqbHczcm1hemJyZ3N5aWU4em14ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UCprfrXABmEKG1a8SE/giphy.gif"
            className="object-cover w-full h-[300px]"
            width={"50"}
            height={"100"}
            alt="kya hua"
          />
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "git add") {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white">
          Done!
          <Image
            src="https://media1.tenor.com/m/c4YEuiMQfBAAAAAd/ryan-howard-bj-novak.gif"
            className="object-cover w-full h-[400px]"
            width={"50"}
            height={"100"}
            alt="kya hua"
          />
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "my dream") {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white">
          <Image
            src="https://media1.tenor.com/m/BEsL9FFFGN4AAAAd/the-office-michael-scott.gif"
            className="object-cover w-full h-[400px]"
            width={"50"}
            height={"100"}
            alt="kya hua"
          />
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "kill") {
      const componentOutput = (
        <div className="p-3 rounded mt-2 text-white">
          Ha! Got you first!
          <Image
            src="https://media1.tenor.com/m/T9ggIIvCZ_EAAAAC/the-office-gun.gif"
            className="object-cover w-full h-[400px]"
            width={"50"}
            height={"100"}
            alt="kya hua"
          />
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "facts") {
      const componentOutput = (
        <div className="p-3 rounded mt-2">
          <p className="text-fuchsia-400"> Here are some facts about me:</p>
          <ul className="text-white">
            <li className="flex ">
              <FaDev className="mt-1 mr-1" /> Web Developer
            </li>
            <li className="flex ">
              <GiArtificialHive className="mt-1 mr-1" /> ML Engnieer
            </li>
            <li className="flex ">
              <IoPlanet className="mt-1 mr-1" />
              Astrophysics Researcher
            </li>
            <li className="flex ">
              <IoIosMusicalNotes className="mt-1 mr-1" />
              Muscisian
            </li>
            <li className="flex ">
              {" "}
              <FaBook className="mt-1 mr-1" />
              Nerd for The Office
            </li>
          </ul>
        </div>
      );
      setHistory((prev) => [
        ...prev,
        { type: "component", content: componentOutput },
      ]);
      return;
    }

    if (cmd === "hello") {
      const commandOutput = "Hello!";
      setHistory((prev) => [
        ...prev,
        { type: "output", content: commandOutput },
      ]);
      return;
    }

    if (cmd === "hello") {
      const commandOutput = "Hello!";
      setHistory((prev) => [
        ...prev,
        { type: "output", content: commandOutput },
      ]);
      return;
    }

    const output =
      cmd in commandMap
        ? commandMap[cmd as keyof typeof commandMap]
        : `Command not found: ${cmd}`;

    setHistory((prev) => [...prev, { type: "output", content: output }]);
  };



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


 return (
    <div className="bg-black p-4 w-full max-w-2xl font-mono rounded-xl shadow-lg mx-auto">
      {/* MacOS-style top bar */}
      <div className="flex space-x-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      {/* Scrollable terminal body */}
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
        {/* Invisible anchor for scroll-to-bottom */}
        <div ref={bottomRef} />
      </div>

      {/* Input line */}
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