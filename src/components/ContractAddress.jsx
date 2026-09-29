import { useState } from "react";
import { CopyIcon, CheckIcon } from "./icons";

const CONTRACT_ADDRESS = "szn-1826.meme-cooking.near";

function ContractAddress() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard not available — fail silently
    }
  }

  return (
    <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-2xl border border-white/10 bg-linear-to-b from-white/7 to-white/2 px-4 py-3 shadow-inner shadow-black/20 backdrop-blur">
      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-widest text-white/40">
          Contract · NEAR
        </p>
        <p className="truncate font-mono text-xs text-white sm:text-sm">
          {CONTRACT_ADDRESS}
        </p>
      </div>
      <button
        onClick={handleCopy}
        className="flex shrink-0 items-center gap-1.5 rounded-xl border border-szn/40 bg-linear-to-b from-szn/25 to-szn/5 px-3 py-2 text-xs font-semibold text-szn shadow-[0_0_20px_-6px_rgba(63,251,53,0.5)] transition hover:from-szn/35 hover:to-szn/10 hover:shadow-[0_0_25px_-4px_rgba(63,251,53,0.6)]"
      >
        {copied ? (
          <>
            <CheckIcon className="h-3.5 w-3.5" /> Copied
          </>
        ) : (
          <>
            <CopyIcon className="h-3.5 w-3.5" /> Copy
          </>
        )}
      </button>
    </div>
  );
}

export default ContractAddress;
