"use client";

import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* GRID SPACE */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ENERGY CORE */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-red-700 via-purple-800 to-black blur-[120px] animate-pulse" />

      {/* SCANLINES */}
      <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.03)_100%)] bg-[length:100%_4px] pointer-events-none" />

      {/* SYSTEM TITLE */}
      <h1 className="absolute top-10 text-4xl tracking-[0.4em] bg-gradient-to-r from-white via-gray-500 to-white bg-clip-text text-transparent">
        FAITH<span className="text-red-600">†</span>HALLOW
      </h1>

      {/* FLOATING COMMAND PANEL */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 p-8 rounded-3xl w-[90%] max-w-2xl shadow-[0_0_60px_rgba(255,0,0,0.2)]">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="TRANSMIT YOUR VISION..."
          className="w-full bg-black/60 border border-white/10 rounded-xl p-5 h-32 resize-none focus:outline-none focus:border-red-600"
        />

        <div className="flex justify-between mt-6">

          <div className="flex gap-3 text-xs tracking-widest">
            <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-red-600/40">
              IMAGE
            </button>
            <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-purple-600/40">
              VIDEO
            </button>
            <button className="px-4 py-2 bg-white/10 rounded-full hover:bg-white/20">
              ENTITY
            </button>
          </div>

          <button className="px-8 py-3 bg-red-600 rounded-full font-bold tracking-[0.3em] hover:scale-110 transition shadow-[0_0_40px_rgba(255,0,0,0.8)]">
            SUMMON
          </button>

        </div>
      </div>

      {/* OUTPUT PORTAL */}
      <div className="absolute bottom-16 w-[80%] max-w-3xl h-[200px] border border-white/10 rounded-3xl backdrop-blur-xl bg-white/5 flex items-center justify-center text-gray-500 tracking-[0.3em]">
        REALITY OUTPUT
      </div>

    </main>
  );
}
