// ── Aether OS · marketing site ───────────────────────────────────────────────
import { useRef, useState, type FormEvent, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Download, Cpu, ShieldCheck, Sparkles, Usb, Globe, KeyRound, BatteryCharging,
  Layers, ArrowRight, Check, Terminal, MonitorDown, Apple, AppWindow, Gauge,
  FolderTree, Puzzle, Zap, Lock, Code2, BookOpen, Keyboard, Plug, HeartHandshake,
  Laptop, MapPin, Loader2, CircleCheck, CircleAlert, Send, History, MousePointerClick, type LucideIcon,
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
} as const

const RELEASES = 'https://github.com/Gasbygh/aetheros-lite-marketing/releases/download'
const LINUX_FILE = `${RELEASES}/v1.5.0/AetherOS-Lite.AppImage`
const WIN_PORTABLE_FILE = `${RELEASES}/v1.5.0/AetherOS-Lite-Portable.exe`
const WIN_INSTALLER_FILE = `${RELEASES}/v1.5.0/Aether.OS.Lite.Setup.1.5.0.exe`

function Mark({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="40" stroke="url(#g)" strokeWidth="10" strokeLinecap="round" strokeDasharray="200 52" transform="rotate(-78 50 50)" />
      <path d="M50 30 L66 62 H34 Z" fill="#10b981" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#34d399" /><stop offset="0.5" stopColor="#2dd4bf" /><stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-3 px-5">
        <Mark size={20} />
        <span className="font-display text-[15px] font-semibold tracking-tight">Aether OS</span>
        <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">Lite 1.5</span>
        <nav className="ml-8 hidden items-center gap-6 text-[13px] text-zinc-400 md:flex">
          <a href="#engine" className="transition hover:text-white">Engine</a>
          <a href="#ui" className="transition hover:text-white">Interface</a>
          <a href="#charter" className="transition hover:text-white">Charter AI</a>
          <a href="#developers" className="transition hover:text-white">Developers</a>
          <a href="#guide" className="transition hover:text-white">Guide</a>
          <a href="#performance" className="transition hover:text-white">Performance</a>
          <a href="#foundation" className="transition hover:text-white">Foundation</a>
          <a href="#changelog" className="transition hover:text-white">Changelog</a>
        </nav>
        <a
          href="#download"
          className="ml-auto rounded-full bg-emerald-500 px-4 py-1.5 text-[13px] font-semibold text-zinc-950 transition hover:bg-emerald-400"
        >
          Download
        </a>
      </div>
    </header>
  )
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 90])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35])

  return (
    <section ref={ref} className="relative overflow-hidden px-5 pb-10 pt-36 md:pt-44">
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/14 blur-[140px]" />
      <div className="pointer-events-none absolute right-[-200px] top-40 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-4 py-1.5 text-[12px] font-medium text-emerald-300"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Aether OS Lite 1.5 — the browser that is an OS
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="font-display text-[13vw] font-bold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
        >
          Your computer,
          <br />
          <span className="gradient-text">anywhere.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-[16px] leading-relaxed text-zinc-400 md:text-lg"
        >
          Aether OS Lite is a full desktop that boots from a USB stick, installs on Windows, Linux
          and macOS — and <b className="text-zinc-200">is its own lean Chromium browser</b>. Your apps,
          your files, your AI. No accounts. No telemetry. No relay standing between you and the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#download"
            className="flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[15px] font-semibold text-zinc-950 transition hover:bg-emerald-400"
          >
            <Download className="h-4 w-4" /> Download free
          </a>
          <a
            href="#engine"
            className="flex items-center gap-2 rounded-full border border-white/12 px-6 py-3 text-[15px] font-semibold text-zinc-200 transition hover:bg-white/5"
          >
            See how it works <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div style={{ y, scale, opacity }} className="relative mt-14 md:mt-20">
          <div className="shot-frame">
            <img src="./shots/m_desktop.png" alt="Aether OS Lite desktop" className="w-full" />
          </div>
          <div className="pointer-events-none absolute inset-x-8 -bottom-10 h-24 rounded-full bg-emerald-500/15 blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  const items = [
    { k: '766 KB', v: 'app bundle inside the shell — not the usual 100 MB' },
    { k: '0', v: 'telemetry, accounts, or phoning home. Ever.' },
    { k: '2', v: 'runtimes, one codebase — native shell + instant web preview' },
    { k: '∞', v: 'devices — any PC, old or new, or straight off USB/SD' },
  ]
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-5 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
        {items.map((i) => (
          <motion.div key={i.k} {...fadeUp}>
            <div className="font-display text-3xl font-bold text-emerald-400 md:text-4xl">{i.k}</div>
            <div className="mt-1.5 text-[13px] leading-snug text-zinc-500">{i.v}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Engine() {
  const points = [
    { icon: Cpu, t: 'Direct, always', d: 'Sites load in real Chromium guest tabs — no CORS relay, no “refused to connect”, no proxy reading your traffic.' },
    { icon: AppWindow, t: 'Real tabs, real sessions', d: 'Every tab is a persistent guest process. Cookies persist. Switch tabs without losing state. Sessions restore after a crash.' },
    { icon: Puzzle, t: 'Chrome Web Store extensions', d: 'Paste any Web Store link — Aether downloads the package and loads it into the engine (MV3 subset).' },
    { icon: Gauge, t: 'Lean by construction', d: 'No background networking, sync, crash reporters, or component updates. Hidden tabs throttle; Performance Mode unmounts them outright.' },
  ]
  return (
    <section id="engine" className="relative px-5 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">The engine</div>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Not a skin on someone else's browser.
            <span className="gradient-text"> It is the browser.</span>
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-zinc-400 md:text-[17px]">
            Most “web operating systems” are pages full of iframes — and the modern web refuses to
            live in an iframe. Aether takes the other path: the OS is a stripped-down Chromium
            application, and every site, cloud app and AI native runs directly in the engine.
          </p>
        </motion.div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {points.map((p) => (
            <motion.div key={p.t} {...fadeUp} className="glass rounded-3xl p-6">
              <p.icon className="h-6 w-6 text-emerald-400" />
              <div className="mt-4 font-display text-lg font-semibold">{p.t}</div>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-zinc-400">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Showcase({
  id, eyebrow, title, copy, img, alt, flip = false, bullets = [],
}: {
  id?: string
  eyebrow: string
  title: ReactNode
  copy: string
  img: string
  alt: string
  flip?: boolean
  bullets?: string[]
}) {
  return (
    <section id={id} className="px-5 py-16 md:py-24">
      <div className={`mx-auto flex max-w-6xl flex-col items-center gap-10 md:gap-16 ${flip ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <motion.div {...fadeUp} className="md:w-[42%]">
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">{eyebrow}</div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">{title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">{copy}</p>
          {bullets.length > 0 && (
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
        <motion.div {...fadeUp} className="w-full md:w-[58%]">
          <div className="shot-frame">
            <img src={img} alt={alt} className="w-full" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Charter() {
  const rules = [
    'The AI is advisory, never mandatory. It proposes; you dispose.',
    'Destructive actions require explicit human approval.',
    'The audit journal is append-only and structurally locked.',
    'Every feature — including the AI itself — can be uninstalled.',
    'A local PIN lock guards the device — still no account, still no cloud.',
  ]
  return (
    <section id="charter" className="px-5 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <motion.div {...fadeUp} className="w-full md:w-[58%]">
          <div className="shot-frame">
            <img src="./shots/m_ai.png" alt="Aether AI with Charter governance" className="w-full" loading="lazy" />
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="md:w-[42%]">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <ShieldCheck className="h-4 w-4" /> The Aether Charter
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            An AI that <span className="gradient-text">asks permission.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
            Aether AI can inspect your system and propose actions — uninstall an app, change the
            theme, organize files. You approve or deny every one, and each turn lands in an
            append-only audit journal you can export any time.
          </p>
          <ul className="mt-5 space-y-2.5">
            {rules.map((r) => (
              <li key={r} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {r}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function Automation() {
  const rules = [
    'Acts through tabs you’re already signed into — no passwords stored, ever.',
    'Routine, low-risk page actions can run automatically; anything risky still proposes.',
    'Banking and payment sites always require your approval, no matter what.',
    'Submitting a form is always gated, on every site.',
  ]
  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <MousePointerClick className="h-4 w-4" /> Browser automation
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Give it your <span className="gradient-text">browsing context.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            Aether AI can read and act on whatever page is open — fill a form, click through a flow,
            look something up — natively inside the engine, not through a third-party integration.
            It's the same Charter governing everything else: never your passwords, never unsupervised
            on the sites that matter most.
          </p>
        </motion.div>
        <motion.ul {...fadeUp} className="mx-auto mt-8 grid max-w-2xl gap-2.5 text-left sm:grid-cols-2">
          {rules.map((r) => (
            <li key={r} className="flex items-start gap-2.5 rounded-xl bg-white/[0.03] p-3 text-[13px] leading-snug text-zinc-300">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              {r}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

function Byok() {
  const providers = ['OpenAI', 'Anthropic', 'Google Gemini', 'OpenRouter', 'xAI · Groq · Mistral · DeepSeek', 'Your own endpoint']
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <KeyRound className="h-4 w-4" /> Bring Your Own Key
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Your key. Your model. <span className="gradient-text">Your AI.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            No Aether AI subscription because there is no Aether AI account. Paste any frontier
            provider's key — it stays on your device, requests run in the native engine, and you
            switch models whenever you like. MCP servers plug in as AI-native tools.
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="mt-8 flex flex-wrap justify-center gap-2.5">
          {providers.map((p) => (
            <span key={p} className="glass rounded-full px-4 py-2 text-[13px] font-medium text-zinc-200">{p}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function Performance() {
  const rows = [
    { label: 'Idle RAM', chrome: 512, aether: 196, unit: 'MB' },
    { label: '10 cloud-app tabs', chrome: 2100, aether: 670, unit: 'MB' },
    { label: 'Cold boot to desktop', chrome: 4.2, aether: 1.6, unit: 's' },
    { label: 'Installed footprint', chrome: 480, aether: 96, unit: 'MB' },
  ]
  const max = 2100
  return (
    <section id="performance" className="border-y border-white/5 bg-white/[0.02] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="text-center">
          <div className="text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">Performance</div>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Built for the laptop you <span className="gradient-text">already own.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-zinc-400">
            Lean Chromium defaults, throttled guests, and a Performance Mode that suspends hidden
            tabs outright. Figures below are measured on a reference i3/8GB machine against a
            mainstream browser running the same workload — the full method is in the technical note.
          </p>
        </motion.div>
        <div className="mt-12 space-y-7">
          {rows.map((r) => (
            <motion.div key={r.label} {...fadeUp}>
              <div className="mb-2 flex items-baseline justify-between text-[13px]">
                <span className="font-medium text-zinc-300">{r.label}</span>
                <span className="text-zinc-500">
                  <b className="font-semibold text-emerald-400">{r.aether}{r.unit}</b>
                  <span className="mx-1.5">vs</span>
                  <span className="line-through opacity-70">{r.chrome}{r.unit}</span>
                </span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(r.aether / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-teal-400"
                  />
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(r.chrome / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-zinc-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mt-8 text-center text-[11.5px] text-zinc-600">
          Emerald = Aether OS Lite · Zinc = mainstream Chromium browser, same workload.
        </p>
      </div>
    </section>
  )
}

function Mcp() {
  return (
    <section className="px-5 py-16 md:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div {...fadeUp}>
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <Plug className="h-4 w-4" /> MCP servers
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Give Aether AI <span className="gradient-text">real tools.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            Connect Model Context Protocol servers (HTTP) — AI-native tools and data sources.
            Aether AI can call them through the native engine, same as any other action: proposed,
            approved by you, and journaled like everything else.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function DevSdk() {
  const code = `const aether = window.aether // undefined in a hosted browser tab

if (aether) {
  aether.platform            // 'win32' | 'linux' | 'darwin'
  aether.versions            // { electron, chrome, node }

  // native window chrome
  await aether.window.minimize()
  await aether.window.toggleMaximize()

  // real device filesystem — no permission re-grants, no quota
  const folder = await aether.device.pickFolder()
  const entries = await aether.device.list(folder.path)
  await aether.device.writeText(\`\${folder.path}/notes.txt\`, 'hello')
}`
  const bullets = [
    'Context-isolated, intent-based IPC — no Node access from app code',
    'Detects gracefully: same code runs hosted, aether is just undefined',
    'Real device filesystem: pick a folder, list/read/write/create/delete — no re-prompts',
    'openExternal(), native window controls, and file:// URLs for media playback',
  ]
  return (
    <section id="developers" className="px-5 py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row md:gap-16">
        <motion.div {...fadeUp} className="md:w-[42%]">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <Code2 className="h-4 w-4" /> For developers
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Build native apps <span className="gradient-text">for Aether.</span>
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
            The OS interface is a web app running as the primary surface of a stripped-down
            Chromium shell. <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">window.aether</code>{' '}
            is injected by the preload bridge — third-party Aether apps get exactly this surface.
          </p>
          <ul className="mt-5 space-y-2.5">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14px] text-zinc-300">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2.5 text-[12.5px] text-zinc-500">
            <code className="rounded-full bg-white/5 px-3 py-1.5 text-emerald-300">npm run electron:dev</code>
            <code className="rounded-full bg-white/5 px-3 py-1.5 text-emerald-300">npm run dist:win</code>
            <code className="rounded-full bg-white/5 px-3 py-1.5 text-emerald-300">dist:linux</code>
            <code className="rounded-full bg-white/5 px-3 py-1.5 text-emerald-300">dist:mac</code>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="w-full md:w-[58%]">
          <pre className="glass overflow-x-auto rounded-3xl p-6 text-[12.5px] leading-relaxed text-zinc-300">
            <code>{code}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  )
}

function Guide() {
  const boot = [
    'Boot screen → click the lock screen to unlock',
    'Land on the desktop: top bar, wallpaper, dock — everything persists automatically',
    'Close and reopen anytime: your session restores exactly as you left it',
  ]
  const shortcuts: [string, string][] = [
    ['Spotlight — apps, files, notes, web', 'Ctrl+K'],
    ['Task switcher (Shift reverses)', 'Alt+Tab'],
    ['Split screen left / right', 'Ctrl+Alt+←/→'],
    ['Maximize / restore', 'Ctrl+Alt+↑/↓'],
    ['Quick task switch', 'Ctrl+Q'],
  ]
  return (
    <section id="guide" className="border-y border-white/5 bg-white/[0.02] px-5 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <BookOpen className="h-4 w-4" /> Guide
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            Up and running <span className="gradient-text">in a minute.</span>
          </h2>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <motion.div {...fadeUp} className="glass rounded-3xl p-6">
            <div className="font-display text-lg font-semibold">First boot</div>
            <ul className="mt-4 space-y-2.5">
              {boot.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div {...fadeUp} className="glass rounded-3xl p-6">
            <div className="flex items-center gap-2 font-display text-lg font-semibold">
              <Keyboard className="h-4 w-4 text-emerald-400" /> Keyboard shortcuts
            </div>
            <div className="mt-4 space-y-2.5">
              {shortcuts.map(([label, keys]) => (
                <div key={label} className="flex items-center justify-between gap-3 text-[13px]">
                  <span className="text-zinc-300">{label}</span>
                  <kbd className="whitespace-nowrap rounded-md bg-white/8 px-2 py-1 text-[11.5px] font-medium text-emerald-300">{keys}</kbd>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.p {...fadeUp} className="mx-auto mt-8 max-w-2xl text-center text-[12.5px] leading-relaxed text-zinc-500">
          Files, notes, settings, open windows and browser tabs all persist on this device —
          no account required. The full walkthrough (mounting a USB stick, Aether AI setup,
          Performance Mode, and more) ships as <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">HOW-TO-USE.md</code> alongside every release.
        </motion.p>
      </div>
    </section>
  )
}

function DownloadSection() {
  const cards: {
    icon: LucideIcon
    os: string
    status: string
    ready: boolean
    note: string
    web?: boolean
    downloads?: { label: string; href: string }[]
  }[] = [
    {
      icon: AppWindow, os: 'Windows', status: 'Ready now', ready: true,
      note: 'Portable .exe (no install, no admin) or the NSIS installer if you prefer a Start Menu shortcut.',
      downloads: [
        { label: 'Portable .exe · 75 MB', href: WIN_PORTABLE_FILE },
        { label: 'Installer .exe · 75 MB', href: WIN_INSTALLER_FILE },
      ],
    },
    {
      icon: Terminal, os: 'Linux', status: 'Ready now', ready: true,
      note: 'AppImage — chmod +x and run from anywhere (even a USB stick). No install, no root.',
      downloads: [{ label: '.AppImage · 122 MB', href: LINUX_FILE }],
    },
    {
      icon: Apple, os: 'macOS', status: 'dmg + zip', ready: false,
      note: 'Apple’s own toolchain (hdiutil/codesign) only runs on macOS, so this build needs a Mac host — coming via a macOS CI runner. Build it yourself today with npm run dist:mac.',
    },
    {
      icon: Globe, os: 'Web preview', status: 'Instant', ready: true, web: true,
      note: 'The same codebase, hosted. Some native powers (device FS, extensions) are engine-only.',
    },
  ]
  return (
    <section id="download" className="relative overflow-hidden px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-emerald-500/12 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <MonitorDown className="h-4 w-4" /> Download
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Take it <span className="gradient-text">with you.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] text-zinc-400">
            Free and open. Runs from a USB stick without installing, or installs like any app.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <motion.div key={c.os} {...fadeUp} className="glass flex flex-col rounded-3xl p-6">
              <c.icon className="h-6 w-6 text-emerald-400" />
              <div className="mt-4 font-display text-xl font-semibold">{c.os}</div>
              <div className={`mt-1 w-fit rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${c.ready ? 'bg-emerald-400/10 text-emerald-300' : 'bg-white/8 text-zinc-400'}`}>
                {c.status}
              </div>
              <p className="mt-3 flex-1 text-[12.5px] leading-relaxed text-zinc-500">{c.note}</p>
              {c.ready && !c.web && c.downloads && (
                <div className="mt-4 flex flex-col gap-2">
                  {c.downloads.map((d, i) => (
                    <a
                      key={d.href}
                      href={d.href}
                      download
                      className={
                        i === 0
                          ? 'flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-2.5 text-[13px] font-semibold text-zinc-950 transition hover:bg-emerald-400'
                          : 'flex items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[13px] font-semibold text-zinc-200 transition hover:bg-white/5'
                      }
                    >
                      <Download className="h-3.5 w-3.5" /> {d.label}
                    </a>
                  ))}
                </div>
              )}
              {c.web && (
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-[13px] font-semibold text-zinc-200 transition hover:bg-white/5"
                >
                  <Globe className="h-3.5 w-3.5" /> Ships as a version
                </a>
              )}
              {!c.ready && (
                <div className="mt-4 flex items-center justify-center gap-2 rounded-full border border-white/8 px-4 py-2.5 text-[13px] font-medium text-zinc-500">
                  <Lock className="h-3.5 w-3.5" /> Build from source
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeUp} className="mx-auto mt-10 max-w-2xl text-center text-[12.5px] leading-relaxed text-zinc-500">
          Every artifact is built from one repository: <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">npm run dist:win</code>,{' '}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">dist:linux</code>,{' '}
          <code className="rounded bg-white/5 px-1.5 py-0.5 text-emerald-300">dist:mac</code>.
          The USB/SD story is real — mount your card from Files → Locations and the OS lives on it.
        </motion.p>
      </div>
    </section>
  )
}

const TAF_FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const TAF_WEB3FORMS_ACCESS_KEY = '461f792e-930e-47a5-8a8f-cb8105ed659d'

const CONTINENTS = ['Africa', 'South America', 'North America', 'Asia'] as const
type Continent = (typeof CONTINENTS)[number]
type DonationType = 'devices' | 'cash' | 'both'

function Taf() {
  const [donationType, setDonationType] = useState<DonationType>('devices')
  const [continent, setContinent] = useState<Continent | null>(null)
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!continent) { setError('Pick which continent should receive the donation.'); return }
    if (!consent) { setError('Please confirm you’re okay being contacted about this donation.'); return }
    setError(null)
    setStatus('submitting')
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('donationType', donationType)
    data.set('continent', continent)
    data.set('access_key', TAF_WEB3FORMS_ACCESS_KEY)
    data.set('subject', 'New Aether Foundation donation interest')
    try {
      const res = await fetch(TAF_FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`Server responded ${res.status}`)
      setStatus('success')
      form.reset()
      setConsent(false)
    } catch {
      setStatus('error')
      setError('Couldn’t reach the donation form right now. Please try again, or email us directly.')
    }
  }

  return (
    <section id="foundation" className="relative overflow-hidden px-5 py-24 md:py-32">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div {...fadeUp} className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <HeartHandshake className="h-4 w-4" /> The Aether Foundation
          </div>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
            Give a laptop <span className="gradient-text">a second life.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-zinc-400">
            Old hardware doesn't have to become e-waste. Donate a device and we refurbish it with
            Aether OS Lite — light enough to run well again — for community centers and school IT
            labs across Africa, the Americas, and Asia. Can't ship a laptop? A cash donation helps
            us buy or refurbish one for a lab that needs it.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-14 grid gap-4 md:grid-cols-4">
          {[
            { icon: Laptop, title: 'Donate a device', copy: 'Any working (or mostly-working) laptop or tablet. We handle wiping, refurbishing, and installing Aether OS.' },
            { icon: HeartHandshake, title: 'Or donate cash', copy: 'Funds new or refurbished devices for labs where hardware donations alone can’t meet demand.' },
            { icon: MapPin, title: 'Pick a continent', copy: 'Choose where your donation goes: Africa, South America, North America, or Asia.' },
            { icon: Send, title: 'We handle logistics', copy: 'After you submit, our team follows up by email to coordinate shipping or payment securely.' },
          ].map((s) => (
            <div key={s.title} className="glass rounded-2xl p-5">
              <s.icon className="h-5 w-5 text-emerald-400" />
              <div className="mt-3 text-[13.5px] font-semibold text-zinc-100">{s.title}</div>
              <p className="mt-1.5 text-[12px] leading-relaxed text-zinc-500">{s.copy}</p>
            </div>
          ))}
        </motion.div>

        <motion.form {...fadeUp} onSubmit={handleSubmit} className="glass mt-10 rounded-3xl p-6 md:p-10">
          {status === 'success' ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <CircleCheck className="h-10 w-10 text-emerald-400" />
              <div className="font-display text-xl font-semibold">Thank you.</div>
              <p className="max-w-md text-[13.5px] leading-relaxed text-zinc-400">
                We've received your donation interest and will follow up by email with next steps.
              </p>
            </div>
          ) : (
            <>
              <div>
                <div className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">I'd like to donate</div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {([
                    ['devices', 'Devices'],
                    ['cash', 'Cash'],
                    ['both', 'Both'],
                  ] as [DonationType, string][]).map(([val, label]) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setDonationType(val)}
                      className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                        donationType === val
                          ? 'bg-emerald-500 text-zinc-950'
                          : 'border border-white/12 text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Send it to</div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {CONTINENTS.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setContinent(c)}
                      className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                        continent === c
                          ? 'bg-emerald-500 text-zinc-950'
                          : 'border border-white/12 text-zinc-300 hover:bg-white/5'
                      }`}
                    >
                      <MapPin className="h-3 w-3" /> {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Name</span>
                  <input name="name" type="text" required
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                </label>
                <label className="block">
                  <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Email</span>
                  <input name="email" type="email" required
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Organization <span className="normal-case text-zinc-600">(school, company, community group — optional)</span></span>
                  <input name="organization" type="text"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                </label>
                {(donationType === 'devices' || donationType === 'both') && (
                  <label className="block sm:col-span-2">
                    <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">About the device(s)</span>
                    <textarea name="deviceDetails" rows={2} placeholder="e.g. 3 laptops, working condition, Windows 10-era"
                      className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                  </label>
                )}
                {(donationType === 'cash' || donationType === 'both') && (
                  <label className="block sm:col-span-2">
                    <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Approximate amount <span className="normal-case text-zinc-600">(optional — no payment info here, we'll follow up securely)</span></span>
                    <input name="cashAmount" type="text" placeholder="e.g. $50, or 'not sure yet'"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                  </label>
                )}
                <label className="block sm:col-span-2">
                  <span className="text-[12.5px] font-semibold uppercase tracking-wide text-zinc-400">Anything else? <span className="normal-case text-zinc-600">(optional)</span></span>
                  <textarea name="message" rows={2}
                    className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-[14px] text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-emerald-400/50" />
                </label>
              </div>

              <label className="mt-5 flex items-start gap-2.5 text-[12.5px] leading-relaxed text-zinc-400">
                <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5" />
                I'm okay being contacted by email about this donation. No spam, no sharing your info elsewhere.
              </label>

              {error && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-rose-500/10 px-3.5 py-2.5 text-[12.5px] text-rose-400">
                  <CircleAlert className="h-4 w-4 shrink-0" /> {error}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-[14px] font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-60 sm:w-auto"
              >
                {status === 'submitting' ? <Loader2 className="h-4 w-4 animate-spin" /> : <HeartHandshake className="h-4 w-4" />}
                {status === 'submitting' ? 'Sending…' : 'Submit donation interest'}
              </button>
            </>
          )}
        </motion.form>

        <motion.p {...fadeUp} className="mx-auto mt-6 max-w-xl text-center text-[12px] leading-relaxed text-zinc-600">
          Prefer email? Reach the Foundation directly at{' '}
          <a href="mailto:foundation@thisisdigos.com" className="text-emerald-400 hover:underline">foundation@thisisdigos.com</a>.
          Large or bulk corporate donations especially welcome.
        </motion.p>
      </div>
    </section>
  )
}

const CHANGELOG = [
  {
    version: '1.5.0',
    date: 'July 2026',
    entries: [
      'Browser automation for Aether AI — reads and acts on pages through your existing signed-in tabs, Charter-gated, never a stored password',
      'PIN lock, PWA-style windows for web apps, and real LLM tool-calling in Aether AI',
      'Screenshot/recording, clipboard history, desktop widgets, and four new apps (PDF Viewer, Activity Monitor, Mail, Maps)',
      'Fixed: web games no longer slow down or crash Aether — live webview guests are now capped',
    ],
  },
  {
    version: '1.4.2',
    date: 'July 2026',
    entries: [
      'Real weather forecasts, Games category in the App Store, hardware Settings pages',
      'Fixed invisible UI from opacity utilities that never generated CSS',
    ],
  },
  {
    version: '1.4.0',
    date: 'July 2026',
    entries: [
      'First public release of the Pretty UI redesign',
    ],
  },
] as const

function Changelog() {
  return (
    <section id="changelog" className="border-t border-white/5 px-5 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div {...fadeUp} className="text-center">
          <div className="mx-auto flex w-fit items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-emerald-400">
            <History className="h-4 w-4" /> Changelog
          </div>
          <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-5xl">
            What <span className="gradient-text">shipped when.</span>
          </h2>
        </motion.div>
        <div className="mt-10 space-y-8">
          {CHANGELOG.map((release) => (
            <motion.div key={release.version} {...fadeUp} className="glass rounded-2xl p-6">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-lg font-bold text-white">v{release.version}</span>
                <span className="text-[12px] text-zinc-500">{release.date}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {release.entries.map((entry) => (
                  <li key={entry} className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-zinc-400">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-400" />
                    {entry}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <Mark size={30} />
        <div className="font-display text-lg font-semibold">Aether OS Lite</div>
        <p className="max-w-md text-[13px] leading-relaxed text-zinc-500">
          ChromeOS, but device-agnostic. An advisory AI under a Charter, an append-only audit
          journal, and absolutely no telemetry.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[12px] text-zinc-500">
          <span className="flex items-center gap-1.5"><Zap className="h-3.5 w-3.5 text-emerald-400" /> Native Chromium engine</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> Charter-governed AI</span>
          <span className="flex items-center gap-1.5"><Usb className="h-3.5 w-3.5 text-emerald-400" /> USB/SD portable</span>
          <span className="flex items-center gap-1.5"><FolderTree className="h-3.5 w-3.5 text-emerald-400" /> Real filesystem</span>
          <span className="flex items-center gap-1.5"><BatteryCharging className="h-3.5 w-3.5 text-emerald-400" /> Device aware</span>
          <span className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5 text-emerald-400" /> Aether Pretty UI</span>
        </div>
        <div className="mt-2 text-[13px] font-medium text-emerald-400">
          Created &amp; built by George Lamptey — Gasby
        </div>
        <div className="text-[11.5px] text-zinc-600">Aether OS Lite 1.5 “Pretty UI” · {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Stats />
      <Engine />
      <Showcase
        id="ui"
        eyebrow="Aether Pretty UI"
        title={<>macOS poise. iOS clarity. <span className="gradient-text">Ubuntu soul.</span></>}
        copy="A window manager with edge-snapping and keyboard tiling, Spotlight search, an Alt+Tab task switcher, Launchpad, Control Center and a dock — fused into one calm, glassy interface that runs at 60 fps on old hardware."
        img="./shots/m_split.png"
        alt="Split-screen windows in Aether OS Lite"
        bullets={[
          'Drag to edges or Ctrl+Alt+arrows to tile',
          'Ctrl+K Spotlight over apps, files, notes and the web',
          'Reduce Motion + Performance Mode for ancient GPUs',
        ]}
      />
      <Showcase
        eyebrow="Cloud apps"
        title={<>Every app you <span className="gradient-text">already use.</span></>}
        copy="Modern software is web apps. The App Store connects them — YouTube, Notion, Figma, GitHub, ChatGPT and more install like native apps, and any URL becomes an app with the custom installer. Chrome Web Store extensions ride along in the engine."
        img="./shots/m_browser.png"
        alt="Aether Web — the browser inside Aether OS Lite"
        flip
        bullets={[
          'Web apps open in real engine tabs, sessions persist',
          'Install any site as an app — name, URL, tile color',
          'Or open it as its own standalone PWA-style window',
          'Downloads land in your real Downloads folder',
        ]}
      />
      <Guide />
      <Charter />
      <Automation />
      <Byok />
      <Mcp />
      <DevSdk />
      <Showcase
        eyebrow="Device aware"
        title={<>It knows <span className="gradient-text">its hardware.</span></>}
        copy="Real battery, network and storage signals drive Control Center. Mount any folder — a USB stick, an SD card, an external drive — and it becomes unlimited first-class storage: open, edit, and play media straight off it."
        img="./shots/m_cc.png"
        alt="Control Center with live device signals"
        bullets={[
          'Brightness and volume are real, not decorative',
          'File System Access on the web build; true paths natively',
          'A mounted USB folder travels with the card',
        ]}
      />
      <Performance />
      <DownloadSection />
      <Taf />
      <Changelog />
      <Footer />
    </div>
  )
}
