import Link from "next/link";
import { Mark } from "./Mark";

type LockupProps = {
  href?: string;
  tagline?: string;
};

export function Lockup({ href = "/", tagline = "tecnologia para negócios" }: LockupProps) {
  return (
    <Link href={href} className="lockup" aria-label="Draivv, início">
      <Mark className="mark" />
      <span className="wordmark">draivv</span>
      {tagline ? <span className="tagline hidden sm:inline">{tagline}</span> : null}
    </Link>
  );
}
