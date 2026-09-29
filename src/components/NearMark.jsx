import nearLogo from "../assets/near-logo.png";

// Official NEAR Protocol mark — used wherever we reference the chain.
function NearMark({ className = "h-4 w-4" }) {
  return (
    <img
      src={nearLogo}
      alt="NEAR"
      className={`${className} shrink-0 rounded-[3px] object-cover`}
    />
  );
}

export default NearMark;
