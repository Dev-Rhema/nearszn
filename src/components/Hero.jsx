import dexscreenerLogo from "../assets/dexscreener-logo.png";
import CoinGraphic from "./CoinGraphic";
import FindUsOn from "./FindUsOn";
import GridScan from "./GridScan";
import NearMark from "./NearMark";
import { ArrowRightIcon } from "./icons";

const CHART_LINK = "https://dexscreener.com/near/refv1-6677";

function Hero() {
  return (
    <section id="top" className="relative flex-1 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1c2b19"
          gridScale={0.12}
          scanColor="#3ffb35"
          scanOpacity={0.4}
          scanDirection="pingpong"
          scanDuration={2.2}
          scanDelay={2.6}
          enablePost
          bloomIntensity={0.5}
          chromaticAberration={0.0015}
          noiseIntensity={0.015}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-r from-[#050505] via-[#050505]/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-1 bg-linear-to-b from-transparent via-transparent to-[#050505]" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 md:grid-cols-2 md:pb-20 md:pt-20">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-szn/40 bg-szn/10 px-3 py-1 text-xs font-semibold tracking-wide text-szn">
            <NearMark className="h-3.5 w-3.5" /> NEAR PROTOCOL
          </span>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            It&apos;s always
            <br />
            <span className="text-szn">$SZN</span> on NEAR.
          </h1>

          <p className="max-w-md text-base text-white/60 sm:text-lg">
            No roadmap, no promises — just a fast, cheap, community-run meme
            coin riding NEAR Protocol&apos;s speed. Every cycle has its
            season. This one&apos;s ours.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CHART_LINK}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl bg-szn px-5 py-3 text-sm font-semibold text-black transition hover:bg-szn-dim"
            >
              <img src={dexscreenerLogo} alt="" className="h-5 w-5" /> View
              Chart <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          <FindUsOn />
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <CoinGraphic className="h-full w-full" />
        </div>
      </div>

      <p className="relative px-5 pb-8 text-center text-[11px] text-white/30">
        $SZN is a meme coin with no intrinsic value or expectation of
        financial return. Purely for entertainment. DYOR.
      </p>
    </section>
  );
}

export default Hero;
