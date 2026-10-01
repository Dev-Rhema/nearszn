import sznLogo from "../assets/szn-logo.png";
import { TelegramIcon, XIcon } from "./icons";

// TODO: point this at the real Telegram profile.
const X_LINK = "https://x.com/nearszn";
const TELEGRAM_LINK = "#";
const BUY_LINK = "https://www.geckoterminal.com/near/pools/refv1-6677";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center">
          <img src={sznLogo} alt="$SZN" className="h-8 w-auto" />
        </a>

        <div className="flex items-center gap-3">
          <a
            href={X_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="X / Twitter"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-szn/40 hover:text-szn"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href={TELEGRAM_LINK}
            aria-label="Telegram"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-szn/40 hover:text-szn"
          >
            <TelegramIcon className="h-4 w-4" />
          </a>
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-szn px-4 py-2 text-sm font-semibold text-black transition hover:bg-szn-dim"
          >
            Buy $SZN
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
