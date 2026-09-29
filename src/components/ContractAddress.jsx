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
    <div className="flex w-full max-w-md items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
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
        className="flex shrink-0 items-center gap-1.5 rounded-xl border border-szn/40 bg-szn/10 px-3 py-2 text-xs font-semibold text-szn transition hover:bg-szn/20"
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
