"use client";
import { useMemo, useState, useEffect } from "react";

export default function Home() {
  // copy-to-clipboard tick
  const [copied, setCopied] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1200);
    return () => clearTimeout(t);
  }, [copied]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const TOKEN = {
    name: "tonr",
    ticker: "TONR",
    links: {
      buy: "#",       // 🔁 replace at launch
      telegram: "#",  // 🔁 replace at launch
      twitter: "#",   // 🔁 replace at launch
      chart: "#",     // 🔁 replace at launch
    },
    contracts: {
      evm: "0xTONR...EVM", // 🔁 replace at launch
      sol: "TONR1111111111111111111111111111111111111" // 🔁 replace at launch
    }
  } as const;

  const ink = useMemo(() => ({
    panel: "bg-transparent border border-[rgba(255,255,255,0.12)]",
    sub: "text-sub",
    btnPri: "bg-white text-black hover:brightness-95 transition",
    btnSec: "border border-white hover:bg-white hover:text-black transition",
  }), []);

  const copy = async (val: string) => {
    try { await navigator.clipboard.writeText(val); setCopied(val); } catch {}
  };

  // closes mobile menu when navigating via anchors
  const closeMobile = () => setMobileOpen(false);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-[rgba(10,10,10,0.7)] border-b border-[rgba(255,255,255,0.12)]">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <span className="font-heading font-extrabold italic tracking-widest uppercase text-xl sm:text-2xl">
              TONR
            </span>
            {/* CMYK gradient bar */}
            <span className="cmyk-grad w-28" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#why" className="opacity-80 hover:opacity-100">why tonr</a>
            <a href="#beta" className="opacity-80 hover:opacity-100">beta runner</a>
            <a href="#token" className="opacity-80 hover:opacity-100">token</a>
            <a href="#cta" className="opacity-80 hover:opacity-100">get $TONR</a>
          </nav>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="sm:hidden px-3 py-2 border border-white text-white"
            onClick={() => setMobileOpen(v => !v)}
          >
            {/* simple boxy hamburger */}
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white mb-1" />
            <span className="block w-5 h-0.5 bg-white" />
          </button>
        </div>

        {/* Mobile dropdown panel */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden border-t border-[rgba(255,255,255,0.12)] bg-[rgb(10,10,10)]"
          >
            <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3">
              <a href="#why" className="opacity-90 hover:opacity-100" onClick={closeMobile}>why tonr</a>
              <a href="#beta" className="opacity-90 hover:opacity-100" onClick={closeMobile}>beta runner</a>
              <a href="#token" className="opacity-90 hover:opacity-100" onClick={closeMobile}>token</a>
              <a href="#cta" className="opacity-90 hover:opacity-100" onClick={closeMobile}>get $TONR</a>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a href={TOKEN.links.buy} className={`px-4 py-2 font-heading font-bold uppercase ${ink.btnPri}`} onClick={closeMobile}>Buy</a>
                <a href={TOKEN.links.telegram} className={`px-4 py-2 font-heading font-bold uppercase ${ink.btnSec}`} onClick={closeMobile}>Telegram</a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-6">
          <p className="uppercase tracking-[0.18em] text-xs opacity-70">low ink warning</p>
          <h1 className="font-heading font-black tracking-widest uppercase text-4xl sm:text-6xl leading-[1.05]">
            THE PRINTR RUNS ON <span className="italic">TONR</span>.
          </h1>
          <p className={`text-lg sm:text-xl ${ink.sub} max-w-3xl`}>
            $TONR is the beta cartridge of the Printr ecosystem — the black liquidity that powers every print.
            No TONR, no print. No print, no launch.
          </p>
          <div className="flex flex-wrap gap-3 pt-2" id="cta">
            <a href={TOKEN.links.buy} className={`px-5 py-3 font-heading font-bold uppercase ${ink.btnPri}`}>Buy $TONR</a>
            <a href={TOKEN.links.telegram} className={`px-5 py-3 font-heading font-bold uppercase ${ink.btnSec}`}>Join Telegram</a>
            <a href={TOKEN.links.chart} className={`px-5 py-3 font-heading font-bold uppercase ${ink.btnSec}`}>View Chart</a>
          </div>
        </div>
        {/* continuous gradient underline */}
        <div className="cmyk-grad w-full" />
        {/* subtle ink drips */}
        <InkDrip />
      </section>

      {/* WHY */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-14 grid sm:grid-cols-2 gap-8">
        <div>
          <h2 className="font-heading font-black uppercase tracking-widest text-2xl sm:text-3xl mb-3">WHY TONR?</h2>
          <ul className={`space-y-3 ${ink.sub}`}>
            <li><b>Fuel, not hype.</b> TONR is the machine’s substance — the beta ink that keeps prints flowing.</li>
            <li><b>Printr-native.</b> Lowercase lore; uppercase output. CMYK pulse mirrors the ecosystem’s DNA.</li>
            <li><b>Cross-chain drip.</b> When the printer goes omnichain, TONR spreads across every tray.</li>
            <li><b>Simple rule.</b> No TONR, no print. It’s that blunt.</li>
          </ul>
        </div>
        <div className={`p-6 ${ink.panel}`}>
          <p className="uppercase tracking-[0.18em] text-xs opacity-70 mb-2">mini lore</p>
          <p className={`${ink.sub}`}>
            The Printer spun up and leaked. A black droplet rolled across the console and said:
            “I am TONR — the beta ink.” Before CMYK paints the spectrum, TONR keeps the machine alive.
          </p>
        </div>
      </section>

      {/* BETA RUNNER */}
      <section id="beta" className="bg-[#0d0d0d] border-y border-[rgba(255,255,255,0.12)]">
        <div className="mx-auto max-w-6xl px-4 py-14 grid sm:grid-cols-3 gap-6">
          <div>
            <h2 className="font-heading font-black uppercase tracking-widest text-2xl sm:text-3xl mb-1">BETA RUNNER OF PRINTR</h2>
            <p className={`text-sm ${ink.sub}`}>TONR is the unofficial-official test cartridge. If TONR leaks, the machine works.</p>
          </div>
          <Block title="SHAKE BEFORE APING" body="Beta ink levels fluctuate. The Printer prefers degens who read the manual after." />
          <Block title="NO TONR, NO LAUNCH" body="Printr’s myth starts with ink. TONR greases the rails before the main token drops." />
          <Block title="CROSS-CHAIN DRIP" body="When chains desync, arbitrage prints. TONR is the black liquidity that flows between." />
          <Block title="REFILL YOUR BAGS" body="Printer jam in your portfolio? Add $TONR. Problem resolved (probably)." />
        </div>
        <div className="cmyk-grad w-full" />
      </section>

      {/* TOKEN DETAILS */}
      <section id="token" className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="font-heading font-black uppercase tracking-widest text-2xl sm:text-3xl mb-6">TOKEN DETAILS</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className={`p-6 ${ink.panel}`}>
            <div className="uppercase tracking-[0.18em] text-xs opacity-70 mb-2">ticker</div>
            <div className="text-3xl font-heading font-black">$TONR</div>
            <div className="uppercase tracking-[0.18em] text-xs opacity-70 mt-4">canonical contracts</div>
            <div className="mt-2 space-y-2">
              <CopyRow label="EVM (omnichain)" value={TOKEN.contracts.evm} onCopy={copy} copied={copied === TOKEN.contracts.evm} />
              <CopyRow label="Solana (SPL mint)" value={TOKEN.contracts.sol} onCopy={copy} copied={copied === TOKEN.contracts.sol} />
            </div>
          </div>
          <div className={`p-6 ${ink.panel}`}>
            <div className="uppercase tracking-[0.18em] text-xs opacity-70 mb-2">links</div>
            <div className="grid grid-cols-2 gap-3">
              <Btn href={TOKEN.links.buy} label="Buy $TONR" primary />
              <Btn href={TOKEN.links.chart} label="View Chart" />
              <Btn href={TOKEN.links.telegram} label="Telegram" />
              <Btn href={TOKEN.links.twitter} label="Twitter/X" />
            </div>
            <p className={`mt-4 text-xs ${ink.sub}`}>* Replace placeholders with live links at launch.</p>
          </div>
        </div>

        {/* Tokenomics strip */}
        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <Tomo k="Supply" v="still printing..." d="beta bonding curve" />
          <Tomo k="Chains" v="Solana + EVM" d="omnichain ready" />
          <Tomo k="Creator fee" v="25%*" d="routed by Printr" />
          <Tomo k="Rule" v="No TONR, no print" d="that's the memo" />
        </div>
        <p className="mt-2 text-xs text-sub">* fee note reflects Printr model; confirm at launch.</p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[rgba(255,255,255,0.12)]">
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <h3 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-widest">
              THE PRINTR RUNS ON <span className="italic">TONR</span>.
            </h3>
            <p className="text-sub mt-1">Without ink, nothing prints. Refill responsibly.</p>
          </div>
          <div className="flex justify-start sm:justify-end gap-3">
            <a href={TOKEN.links.buy} className={`px-5 py-3 font-heading font-bold uppercase ${ink.btnPri}`}>Buy $TONR</a>
            <a href={TOKEN.links.telegram} className={`px-5 py-3 font-heading font-bold uppercase ${ink.btnSec}`}>Join Telegram</a>
          </div>
        </div>
        <div className="cmyk-grad w-full" />
        <div className="text-center text-xs text-sub py-4">© {new Date().getFullYear()} tonr.money — beta ink for the Printr.</div>
      </footer>
    </main>
  );
}

/* components (inline) */
function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-6 border border-[rgba(255,255,255,0.12)]">
      <h3 className="font-heading font-black uppercase tracking-widest mb-1">{title}</h3>
      <p className="text-sub text-sm">{body}</p>
    </div>
  );
}

function CopyRow({ label, value, onCopy, copied }:{
  label: string; value: string; onCopy: (v: string) => void; copied: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="uppercase tracking-[0.18em] text-xs opacity-70">{label}</div>
        <div className="font-code text-sm break-all select-all">{value}</div>
      </div>
      <button onClick={() => onCopy(value)} className="px-3 py-1.5 border border-white opacity-80 hover:opacity-100">
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

function Btn({ href, label, primary }:{ href: string; label: string; primary?: boolean }) {
  const base = "px-4 py-2.5 font-heading font-bold uppercase inline-flex items-center justify-center";
  const pri = "bg-white text-black hover:brightness-95";
  const sec = "border border-white hover:bg-white hover:text-black";
  return <a href={href} className={`${base} ${primary ? pri : sec}`}>{label}</a>;
}

function Tomo({ k, v, d }:{ k: string; v: string; d: string }) {
  return (
    <div className="p-5 border border-[rgba(255,255,255,0.12)]">
      <div className="uppercase tracking-[0.18em] text-xs opacity-70">{k}</div>
      <div className="text-2xl font-heading font-black">{v}</div>
      <div className="text-sub text-sm mt-1">{d}</div>
    </div>
  );
}

function InkDrip() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute top-0 bg-white/5"
          style={{
            left: `${(i * 17) % 90 + 2}%`,
            width: `${8 + (i % 3) * 6}px`,
            height: "140%",
            filter: "blur(6px)",
            animation: `drip ${6 + i}s ease-in forwards`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}
