"use client";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(null), 1400);
    return () => clearTimeout(t);
  }, [copied]);

  const TOKEN = {
    name: "tonr",
    ticker: "TONR",
    links: {
      buy: "#",       // 🔁 replace at launch
      telegram: "#",  // 🔁 replace at launch
      twitter: "#",   // 🔁 replace at launch
      chart: "#",     // 🔁 replace at launch
      docs: "#"
    },
    contracts: {
      evm: "0xTONR...EVM",                 // 🔁 replace at launch
      sol: "TONR1111111111111111111111111111111111111" // 🔁 replace at launch
    }
  } as const;

  const theme = useMemo(
    () => ({
      bg: dark ? "bg-neutral-950" : "bg-white",
      text: dark ? "text-white" : "text-black",
      subtext: dark ? "text-white/70" : "text-black/70",
      panel: dark ? "bg-white/5 border-white/10" : "bg-white border-black/10",
      border: dark ? "border-white/10" : "border-black/10",
      btnPri: dark
        ? "bg-white text-black hover:bg-white/90"
        : "bg-black text-white hover:bg-black/85",
      btnSec: dark
        ? "border border-white hover:bg-white hover:text-black"
        : "border border-black hover:bg-black hover:text-white",
    }),
    [dark]
  );

  const copy = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(value);
    } catch {}
  };

  return (
    <main className={`${theme.bg} ${theme.text} min-h-screen font-sans`}>
      <Head>
        <title>tonr — The Printr runs on tonr</title>
        <meta
          name="description"
          content="The Printr runs on TONR — the beta ink powering the machine. No TONR, no print."
        />
        <meta property="og:title" content="tonr — beta ink for Printr" />
        <meta
          property="og:description"
          content="Before the future prints, the printer leaks. $TONR is the beta cartridge of the Printr ecosystem."
        />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      {/* Nav */}
      <header
        className={`sticky top-0 z-20 backdrop-blur ${
          dark ? "bg-neutral-950/70" : "bg-white/70"
        } ${theme.border} border-b`}
      >
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 select-none">
            <span className="text-2xl sm:text-3xl font-black italic tracking-tight lowercase">
              tonr
            </span>
            <span className="h-2 w-24 rounded overflow-hidden inline-flex">
              <span className="h-full w-1/3 bg-cyan-400" />
              <span className="h-full w-1/3 bg-pink-500" />
              <span className="h-full w-1/3 bg-yellow-400" />
            </span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#why" className="hover:opacity-70">
              why tonr
            </a>
            <a href="#beta" className="hover:opacity-70">
              beta runner
            </a>
            <a href="#token" className="hover:opacity-70">
              token
            </a>
            <a href="#cta" className="hover:opacity-70">
              get $TONR
            </a>
            <button
              onClick={() => setDark((v) => !v)}
              className={`px-3 py-1.5 rounded-md ${theme.btnSec} transition`}
            >
              {dark ? "light" : "dark"}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-8">
          <p className="text-xs font-semibold tracking-widest uppercase">
            low ink warning
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            The Printr runs on <span className="italic">tonr</span>.
          </h1>
          <p className={`text-lg sm:text-xl ${theme.subtext} max-w-3xl`}>
            $TONR is the beta cartridge of the Printr ecosystem — the black
            liquidity that powers every print. No TONR, no print. No print, no
            launch.
          </p>
          <div className="flex flex-wrap gap-3 pt-2" id="cta">
            <a
              href={TOKEN.links.buy}
              className={`px-5 py-3 rounded-xl font-bold transition ${theme.btnPri}`}
            >
              Buy $TONR
            </a>
            <a
              href={TOKEN.links.telegram}
              className={`px-5 py-3 rounded-xl font-bold transition ${theme.btnSec}`}
            >
              Join Telegram
            </a>
            <a
              href={TOKEN.links.chart}
              className={`px-5 py-3 rounded-xl font-bold transition ${theme.btnSec}`}
            >
              View Chart
            </a>
          </div>
        </div>
        <div className="w-full h-1 flex">
          <div className="flex-1 bg-cyan-400" />
          <div className="flex-1 bg-pink-500" />
          <div className="flex-1 bg-yellow-400" />
        </div>
        <InkDrip dark={dark} />
      </section>

      {/* Why */}
      <section
        id="why"
        className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-2 gap-10"
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-4">
            Why TONR?
          </h2>
          <ul className={`space-y-3 ${theme.subtext}`}>
            <li>
              <span className="font-bold">Fuel, not hype.</span> TONR is the
              machine’s substance — the beta ink that keeps prints flowing.
            </li>
            <li>
              <span className="font-bold">Printr-native.</span> Lowercase
              wordmark + CMYK pulse to mirror the ecosystem’s DNA.
            </li>
            <li>
              <span className="font-bold">Cross-chain drip.</span> When the
              printer goes omnichain, TONR spreads across every tray.
            </li>
            <li>
              <span className="font-bold">Simple rule.</span> No TONR, no
              print. It’s that blunt.
            </li>
          </ul>
        </div>
        <div className={`rounded-2xl p-6 shadow-sm ${theme.panel} ${theme.border}`}>
          <p className="text-sm uppercase tracking-widest mb-2">mini lore</p>
          <p className={`${theme.subtext}`}>
            The Printer spun up and leaked. A black droplet rolled across the
            console and said: “I am TONR — the beta ink.” Before CMYK paints the
            spectrum, TONR keeps the machine alive.
          </p>
        </div>
      </section>

      {/* Beta Runner */}
      <section
        id="beta"
        className={`${dark ? "bg-neutral-900" : "bg-neutral-50"} ${theme.text}`}
      >
        <div className="mx-auto max-w-6xl px-4 py-16 grid sm:grid-cols-3 gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
              Beta runner of Printr
            </h2>
            <p className={`${theme.subtext}`}>
              TONR is the unofficial-official test cartridge. If TONR leaks, the
              machine works.
            </p>
          </div>
          <div className="space-y-4">
            <Card
              title="Shake before aping"
              body="Beta ink levels fluctuate. The Printer prefers degens who read the manual after."
              dark={dark}
            />
            <Card
              title="No TONR, no launch"
              body="Printr’s myth starts with ink. TONR greases the rails before the main token drops."
              dark={dark}
            />
          </div>
          <div className="space-y-4">
            <Card
              title="Cross-chain drip"
              body="When chains desync, arbitrage prints. TONR is the black liquidity that flows between."
              dark={dark}
            />
            <Card
              title="Refill your bags"
              body="Printer jam in your portfolio? Add $TONR. Problem resolved (probably)."
              dark={dark}
            />
          </div>
        </div>
        <div className="w-full h-1 flex">
          <div className="flex-1 bg-cyan-400" />
          <div className="flex-1 bg-pink-500" />
          <div className="flex-1 bg-yellow-400" />
        </div>
      </section>

      {/* Token details */}
      <section id="token" className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight mb-6">
          Token details
        </h2>
        <div className={`grid gap-6 sm:grid-cols-2`}>
          <div className={`rounded-2xl p-6 ${theme.panel} ${theme.border}`}>
            <div className="text-sm uppercase tracking-widest mb-2">ticker</div>
            <div className="text-3xl font-extrabold">${TOKEN.ticker}</div>
            <div className="text-sm mt-4 uppercase tracking-widest">
              canonical contracts
            </div>
            <div className="mt-2 space-y-2">
              <CopyRow
                label="EVM (omnichain)"
                value={TOKEN.contracts.evm}
                onCopy={copy}
                copied={copied === TOKEN.contracts.evm}
              />
              <CopyRow
                label="Solana (SPL mint)"
                value={TOKEN.contracts.sol}
                onCopy={copy}
                copied={copied === TOKEN.contracts.sol}
              />
            </div>
          </div>
          <div className={`rounded-2xl p-6 ${theme.panel} ${theme.border}`}>
            <div className="text-sm uppercase tracking-widest mb-2">links</div>
            <div className="grid grid-cols-2 gap-3">
              <LinkBtn href={TOKEN.links.buy} label="Buy $TONR" primary dark={dark} />
              <LinkBtn href={TOKEN.links.chart} label="View Chart" dark={dark} />
              <LinkBtn href={TOKEN.links.telegram} label="Telegram" dark={dark} />
              <LinkBtn href={TOKEN.links.twitter} label="Twitter/X" dark={dark} />
            </div>
            <p className={`mt-4 text-xs ${theme.subtext}`}>
              * Replace placeholders with live links at launch.
            </p>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <Tomo k="Supply" v="still printing..." d="beta bonding curve" dark={dark} />
          <Tomo k="Chains" v="Solana + EVM" d="omnichain ready" dark={dark} />
          <Tomo k="Creator fee" v="25%*" d="routed by printr" dark={dark} />
          <Tomo k="Rule" v="No TONR, no print" d="that's the memo" dark={dark} />
        </div>
        <p className={`mt-2 text-xs ${theme.subtext}`}>
          * fee note reflects Printr model; confirm at launch.
        </p>
      </section>

      {/* Footer */}
      <footer className={`border-t ${theme.border}`}>
        <div className="mx-auto max-w-6xl px-4 py-10 grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              The Printr runs on <span className="italic">tonr</span>.
            </h3>
            <p className={`${theme.subtext} mt-1`}>
              Without ink, nothing prints. Refill responsibly.
            </p>
          </div>
          <div className="flex justify-start sm:justify-end gap-3">
            <a href={TOKEN.links.buy} className={`px-5 py-3 rounded-xl font-bold transition ${theme.btnPri}`}>
              Buy $TONR
            </a>
            <a href={TOKEN.links.telegram} className={`px-5 py-3 rounded-xl font-bold transition ${theme.btnSec}`}>
              Join Telegram
            </a>
          </div>
        </div>
        <div className="w-full h-1 flex">
          <div className="flex-1 bg-cyan-400" />
          <div className="flex-1 bg-pink-500" />
          <div className="flex-1 bg-yellow-400" />
        </div>
        <div className={`text-center text-xs ${theme.subtext} py-4`}>
          © {new Date().getFullYear()} tonr.money — beta ink for the Printr.
        </div>
      </footer>

      <style jsx>{`
        @keyframes drip {
          0% { transform: translateY(-100%); opacity: 0.0; }
          60% { opacity: 0.5; }
          100% { transform: translateY(0); opacity: 0; }
        }
      `}</style>
    </main>
  );
}

function Card({ title, body, dark }: { title: string; body: string; dark: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${dark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className={`${dark ? "text-white/80" : "text-black/70"} text-sm`}>{body}</p>
    </div>
  );
}

function CopyRow({
  label, value, onCopy, copied,
}: { label: string; value: string; onCopy: (v: string) => void; copied: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div>
        <div className="text-xs uppercase tracking-widest opacity-70">{label}</div>
        <div className="font-mono text-sm break-all select-all">{value}</div>
      </div>
      <button onClick={() => onCopy(value)} className="px-3 py-1.5 rounded-md border border-current opacity-80 hover:opacity-100 transition">
        {copied ? "copied" : "copy"}
      </button>
    </div>
  );
}

function LinkBtn({ href, label, primary, dark }: { href: string; label: string; primary?: boolean; dark: boolean }) {
  const base = "px-4 py-2.5 rounded-lg font-bold transition inline-flex items-center justify-center";
  const pri = dark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/85";
  const sec = dark ? "border border-white hover:bg-white hover:text-black" : "border border-black hover:bg-black hover:text-white";
  return <a href={href} className={`${base} ${primary ? pri : sec}`}>{label}</a>;
}

function Tomo({ k, v, d, dark }: { k: string; v: string; d: string; dark: boolean }) {
  return (
    <div className={`rounded-2xl p-5 ${dark ? "bg-white/5 border-white/10" : "bg-white border-black/10"}`}>
      <div className="text-sm uppercase tracking-widest opacity-70">{k}</div>
      <div className="text-2xl font-black">{v}</div>
      <div className={`${dark ? "text-white/70" : "text-black/70"} text-sm mt-1`}>{d}</div>
    </div>
  );
}

function InkDrip({ dark }: { dark: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className={`absolute top-0 ${dark ? "bg-white/5" : "bg-black/5"}`}
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

