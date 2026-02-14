"use client";

import { useState } from "react";

export default function FaithHallow() {
  const [prompt, setPrompt] = useState("");

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center">

      {/* CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,0,0,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(90,0,150,0.25),transparent_40%)]" />

      {/* GRAIN OVERLAY */}
      <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl px-6">

        {/* LOGO */}
        <h1 className="text-center text-6xl font-bold tracking-[0.4em] mb-2">
          FAITH<span className="text-red-600">†</span>HALLOW
        </h1>

        <p className="text-center text-gray-500 mb-14">
          AI CREATION ENGINE — DARK MODE
        </p>

        {/* GLASS PANEL */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_60px_rgba(255,0,0,0.15)]">

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your dark vision..."
            className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm focus:outline-none focus:border-red-600 h-36 resize-none"
          />

          <div className="flex justify-between items-center mt-6">

            {/* MODES */}
            <div className="flex gap-3 text-xs">
              <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-red-600/30 transition">
                Image
              </button>
              <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-purple-600/30 transition">
                Video
              </button>
              <button className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                Chat
              </button>
            </div>

            {/* GENERATE BUTTON */}
            <button className="px-8 py-3 bg-red-600 rounded-full font-semibold tracking-widest hover:scale-105 transition shadow-[0_0_25px_rgba(255,0,0,0.6)]">
              GENERATE
            </button>

          </div>
        </div>

        {/* RESULT FRAME */}
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl h-[320px] flex items-center justify-center text-gray-500 text-sm">
          YOUR CREATION APPEARS HERE
        </div>

      </div>
    </main>
  );
}
