"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { Apt404Logo } from "@/components/Apt404Logo";
import { DoorGlyph } from "@/components/DoorGlyph";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

const selectedWork = [
  {
    id: "001",
    title: "Say What?",
    discipline: "Party game / mobile",
  },
  {
    id: "002",
    title: "Reliquary",
    discipline: "Puzzle / narrative",
  },
];

export default function Home() {
  const [activeWork, setActiveWork] = useState<number | null>(null);
  const doorIntensity = activeWork === null ? 0.72 : 0.94;
  const doorOffset =
    activeWork === null ? 0 : (activeWork - (selectedWork.length - 1) / 2) * 7;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030303] text-neutral-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.024)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-neutral-100/25"
      />

      <div className="relative z-10 flex min-h-screen flex-col px-5 py-5 sm:px-8 lg:px-10">
        <header className="flex items-start justify-between gap-6">
          <Apt404Logo />
          <nav aria-label="Primary navigation" className="flex flex-wrap justify-end gap-x-5 gap-y-3 sm:gap-x-7">
            {navItems.map((item) => (
              <a
                className="group relative font-mono text-[0.64rem] uppercase tracking-signal text-neutral-400 transition-colors duration-500 hover:text-neutral-50"
                href={item.href}
                key={item.label}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-neutral-50 transition-transform duration-500 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </header>

        <section className="grid flex-1 grid-cols-1 items-center gap-10 py-16 md:grid-cols-[minmax(0,0.82fr)_minmax(15rem,0.74fr)] md:gap-8 lg:grid-cols-[minmax(15rem,0.68fr)_minmax(18rem,0.72fr)_minmax(20rem,0.78fr)] lg:py-10">
          <div className="order-2 max-w-[18rem] scroll-mt-20 self-end md:order-2 lg:order-1 lg:self-center" id="about">
            <p className="font-mono text-[0.62rem] uppercase tracking-signal text-neutral-500">APT404</p>
            <h1 className="mt-5 space-y-2 text-[clamp(1.85rem,4.2vw,4.7rem)] font-normal leading-[0.95] tracking-[0] text-neutral-100">
              <span className="block">Experiences</span>
              <span className="block text-neutral-500">with technology.</span>
            </h1>
            <p className="mt-7 max-w-[17rem] text-sm leading-6 tracking-[0] text-neutral-500 sm:text-[0.95rem]">
              A creative studio for software, games, interfaces, and experimental systems.
            </p>
          </div>

          <div className="order-1 flex min-h-[19rem] items-center justify-center md:order-1 md:col-span-2 lg:order-2 lg:col-span-1">
            <div
              className="group relative h-[min(58vw,31rem)] min-h-[17rem] w-[min(31vw,16rem)] min-w-[9rem]"
              style={
                {
                  "--door-active": activeWork === null ? "0" : "1",
                  "--door-offset": `${doorOffset}px`,
                } as CSSProperties
              }
            >
              <div className="absolute inset-x-[-64%] top-[18%] h-[62%] translate-x-[var(--door-offset)] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.20),rgba(255,255,255,0.045)_34%,transparent_69%)] opacity-[calc(0.54+var(--door-active)*0.34)] blur-2xl transition-[opacity,transform] duration-700" />
              <DoorGlyph
                className="relative h-full w-full translate-x-[var(--door-offset)] drop-shadow-[0_0_28px_rgba(255,255,255,0.13)] transition-[filter,transform] duration-700 ease-out"
                intensity={doorIntensity}
              />
              <div className="absolute bottom-[3%] left-1/2 h-px w-[142%] -translate-x-1/2 bg-gradient-to-r from-transparent via-neutral-100/25 to-transparent" />
            </div>
          </div>

          <div className="order-3 scroll-mt-20 md:order-3 md:col-span-2 lg:col-span-1 lg:self-center" id="work">
            <div className="mb-5 flex items-center justify-between border-b border-neutral-100/12 pb-3">
              <p className="font-mono text-[0.62rem] uppercase tracking-signal text-neutral-500">Selected work</p>
              <span className="font-mono text-[0.62rem] uppercase tracking-signal text-neutral-700">Index</span>
            </div>
            <div className="divide-y divide-neutral-100/10">
              {selectedWork.map((work, index) => (
                <a
                  className="group grid grid-cols-[3.4rem_minmax(0,1fr)_auto] items-baseline gap-4 py-4 text-neutral-500 transition-colors duration-500 hover:text-neutral-50 focus-visible:text-neutral-50 focus-visible:outline-none sm:grid-cols-[3.4rem_minmax(0,1fr)_minmax(11rem,auto)_1.1rem]"
                  href="#work"
                  key={work.id}
                  onBlur={() => setActiveWork(null)}
                  onFocus={() => setActiveWork(index)}
                  onMouseEnter={() => setActiveWork(index)}
                  onMouseLeave={() => setActiveWork(null)}
                >
                  <span className="font-mono text-[0.68rem] tracking-signal text-neutral-600 transition-colors duration-500 group-hover:text-neutral-300">
                    {work.id}
                  </span>
                  <span className="text-base font-normal tracking-[0] sm:text-lg">{work.title}</span>
                  <span className="hidden text-right font-mono text-[0.62rem] uppercase tracking-signal text-neutral-600 transition-colors duration-500 group-hover:text-neutral-300 sm:col-start-3 sm:block">
                    {work.discipline}
                  </span>
                  <span className="col-start-2 font-mono text-[0.62rem] uppercase tracking-signal text-neutral-600 sm:hidden">
                    {work.discipline}
                  </span>
                  <span className="col-start-3 row-start-1 translate-x-0 text-neutral-600 transition-transform duration-500 group-hover:translate-x-1 group-hover:text-neutral-200 sm:col-start-4">
                    -&gt;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <footer className="grid scroll-mt-20 gap-3 border-t border-neutral-100/12 pt-4 font-mono text-[0.62rem] uppercase tracking-signal text-neutral-600 sm:grid-cols-3" id="contact">
          <span>EST. 2021</span>
          <span className="sm:text-center">NYC</span>
          <span className="sm:text-right">Software / Games / Systems</span>
        </footer>
      </div>
    </main>
  );
}
