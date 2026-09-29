import dexscreenerLogo from "../assets/dexscreener-logo.png";
import geckoterminalLogo from "../assets/geckoterminal-logo.svg";
import memeCookingLogo from "../assets/memecooking-logo.png";
import nearblocksLogo from "../assets/nearblocks-logo.svg";
import ContractAddress from "./ContractAddress";
import NearMark from "./NearMark";

function NearBlocksIcon() {
  return <img src={nearblocksLogo} alt="" className="h-3.5 w-3.5 shrink-0" />;
}

function DexscreenerIcon() {
  // logo is fine-detailed line art — needs more pixels than the other
  // icons to stay legible, and it's black-on-transparent so invert to
  // white for these dark pills.
  return (
    <img
      src={dexscreenerLogo}
      alt=""
      className="h-5 w-5 shrink-0 brightness-0 invert"
    />
  );
}

function GeckoTerminalIcon() {
  return <img src={geckoterminalLogo} alt="" className="h-3.5 w-3.5 shrink-0" />;
}

function MemeCookingIcon() {
  return (
    <img
      src={memeCookingLogo}
      alt=""
      className="h-4 w-4 shrink-0 rounded-full object-cover"
    />
  );
}

const LINKS = [
  {
    label: "Explorer",
    icon: NearBlocksIcon,
    href: "https://nearblocks.io/address/szn-1826.meme-cooking.near",
  },
  {
    label: "Dexscreener",
    icon: DexscreenerIcon,
    href: "https://dexscreener.com/near/refv1-6677",
  },
  {
    label: "GeckoTerminal",
    icon: GeckoTerminalIcon,
    href: "https://www.geckoterminal.com/near/pools/refv1-6677",
  },
  {
    label: "meme.cooking",
    icon: MemeCookingIcon,
    href: "https://meme.cooking/meme/1826",
  },
];

function FindUsOn() {
  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-linear-to-b from-white/8 to-white/2 p-5 shadow-[0_0_60px_-15px_rgba(63,251,53,0.25)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-szn/10 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-szn/20 blur-[80px]" />

      <div className="relative flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
          Find us on
        </p>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-szn/30 bg-szn/10 px-2.5 py-1 text-xs font-semibold text-szn">
          <NearMark className="h-3.5 w-3.5" /> NEAR
        </span>
      </div>

      <div className="relative mt-4">
        <ContractAddress />
      </div>

      <div className="relative mt-3 grid grid-cols-2 gap-3">
        {LINKS.map(({ label, icon: Icon, href }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-linear-to-b from-white/7 to-white/1 px-3 py-2.5 text-xs font-semibold text-white/80 shadow-inner shadow-black/20 transition hover:border-szn/40 hover:text-szn hover:shadow-[0_0_20px_-4px_rgba(63,251,53,0.35)] ${
              i === LINKS.length - 1 && LINKS.length % 2 === 1 ? "col-span-2" : ""
            }`}
          >
            <Icon />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default FindUsOn;
