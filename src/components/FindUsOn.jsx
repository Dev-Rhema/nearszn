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
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
        Find us on
      </p>
      <p className="mt-1 mb-4 flex items-center gap-1.5 text-sm font-semibold text-szn">
        <NearMark className="h-4 w-4" /> NEAR
      </p>

      <ContractAddress />

      <div className="mt-3 grid grid-cols-2 gap-3">
        {LINKS.map(({ label, icon: Icon, href }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            className={`flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white/80 transition hover:border-szn/40 hover:text-szn ${
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
