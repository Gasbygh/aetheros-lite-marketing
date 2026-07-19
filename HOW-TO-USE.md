# Aether OS Lite · How to Use

**Aether OS Lite** is a portable desktop OS that is *its own lean Chromium browser* — “ChromeOS, but device-agnostic.” It runs two ways from one codebase, and both are included in this release. Created & built by **George Lamptey — Gasby**.

---

## 1. Choose your runtime

| | **Web preview** (instant) | **Native browser** (full power) |
|---|---|---|
| What it is | The OS hosted as a web app | The OS as its own Chromium application |
| Best for | Trying it in 5 seconds | Real daily use, USB portability |
| Web apps | Load via Direct frame / Relay / native tab | Load **directly in the engine** — no relay |
| Device files | Import/export, or File System Access (Chromium) | True paths, native dialogs, persists by path |
| Chrome extensions | — | ✔ (MV3 subset) |
| Offline | PWA service worker | Always |

### A. Web preview
Open the **Aether OS Lite** app version in your dashboard — that's it. Everything except the engine-only features works in the tab.

### B. Native portable build (Linux, included)
The file **`AetherOS-Lite-1.4.0-linux-x64.tar.xz`** (69 MB) ships alongside this document:

```bash
tar -xJf AetherOS-Lite-1.4.0-linux-x64.tar.xz     # extract anywhere — even a USB stick
cd AetherOS-Lite-1.4.0
./aether-os-lite                                   # run. No install, no root.
```

Copy the folder to a **USB 3 stick or SD card** and it runs on any Linux PC you plug into. (On some systems the bundled sandbox helper needs `chrome-sandbox` root-owned; if the app won't start, run once with `--no-sandbox`.)

### C. Build for your platform (Windows / macOS / Linux installers)
Requires Node.js 20+:

```bash
npm install
npm run electron:dev     # develop natively with hot reload
npm run dist:win         # → release/  portable .exe + NSIS installer
npm run dist:mac         # → release/  .dmg + .zip (build on a Mac)
npm run dist:linux       # → release/  AppImage
```

The Windows **portable .exe** and Linux **AppImage** are single files — the USB/SD story on those platforms.

---

## 2. First boot

1. **Boot screen** → click on the **lock screen** to unlock.
2. You land on the desktop: top bar (menus, device signals, clock), wallpaper, dock.
3. Everything persists automatically on this device — files, notes, settings, open windows, browser tabs. Close and reopen: your **session restores**.

## 3. Daily driving

| Action | How |
|---|---|
| Open apps | Dock icons, **Launchpad** (grid icon), or **Spotlight** `Ctrl+K` |
| Search everything | `Ctrl+K` — apps, files, notes, actions, web search |
| Task switcher | `Alt+Tab` (Shift reverses) or `Ctrl+Q` |
| Split screen | Drag a window to a screen edge, or `Ctrl+Alt+←/→` |
| Maximize / restore | `Ctrl+Alt+↑` / `Ctrl+Alt+↓`, or the green traffic light (hover for tile menu) |
| Control Center | Toggle icon in the top bar — real Wi-Fi, battery, brightness, volume, **Performance Mode** |
| Notifications | Clock/date in the top bar |

## 4. Files & your device

- **Files** is a real persistent filesystem (Aether Volume in local storage).
- **Import** toolbar button brings device files in (media up to 4 MB plays inline).
- **Locations → Mount device…** (native build; Chromium on web): pick any real folder — USB stick, SD card, external drive. It becomes first-class storage: read, write, create, delete, and **play media straight off it**. Natively it remounts silently forever (it's just a path); on the web it may need a one-click re-grant after restart.
- Double-click media anywhere to open it in **Player** (video/audio) or **Photos**.

## 5. Aether Web (the browser)

- Type a URL or search in the omnibox. **Natively**, every site loads directly with persistent tabs — restore after restart included.
- **Detach** pops any tab into its own native window.
- **Hosted build only**: sites that block embedding show the amber bar — toggle **Relay**, or Detach into a real browser tab.

## 6. App Store & web apps

- **Native apps**: install/uninstall (destructive actions ask for Charter approval — that's the point).
- **Cloud web apps**: YouTube, Notion, Figma, GitHub, ChatGPT… install like native; they open in Aether Web.
- **“+ Add any web app”**: name + URL + tile color → your own app in Launchpad and Spotlight.
- **Extensions** (native build): paste a **Chrome Web Store link or 32-letter ID** → Install. Content scripts apply to every browsing tab (MV3, Electron-supported subset).

## 7. Aether AI — Bring Your Own Key

1. **Settings → Aether AI**: pick a provider — **OpenAI, Anthropic, Google Gemini, OpenRouter**, or a custom OpenAI-compatible endpoint (xAI, Groq, DeepSeek, Ollama…).
2. Paste your **API key** (stored per provider, only on this device). Optionally override the **model**.
3. Chat in the **Aether AI** app. OS actions (uninstall, theme, notes…) still go through **Charter proposals** you approve or deny; everything is journaled in the **Audit** app.
4. **MCP servers** (experimental): add name + `https://` URL in Settings → Aether AI; Aether AI probes `tools/list` and shows live tool counts, journaled like everything else.

## 8. For slow or old hardware

- **Control Center → Performance** (or Settings → Relay & Power): suspends hidden browser tabs, kills animations and dock magnification.
- **Reduce Motion** in Control Center for ancient GPUs.
- The whole OS idles around **~200 MB RAM** natively.

## 9. The Charter (what makes it Aether)

The AI is advisory, never mandatory — it proposes, you dispose. Destructive actions need explicit approval. The audit journal is append-only. Every feature, including the AI, can be uninstalled. Your data never leaves the device. **There is no telemetry.**

---

*Version 1.4 “Pretty UI”. Full architecture in `README.md`; native SDK for app developers in `electron/SDK.md`; performance methodology in `ELECTRON-OPTIMIZATION-NOTES.md`.*
