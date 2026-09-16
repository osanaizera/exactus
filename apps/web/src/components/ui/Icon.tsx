type IconName =
  | "inbound"
  | "outbound"
  | "platform"
  | "search"
  | "target"
  | "mail"
  | "chart"
  | "bot"
  | "quote"
  | "doc"
  | "nurture"
  | "module";

const paths: Record<IconName, string> = {
  inbound: "M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2",
  outbound: "M12 21V9m0 0l-4 4m4-4l4 4M4 7V5a2 2 0 012-2h12a2 2 0 012 2v2",
  platform: "M4 5h16v5H4zM4 14h7v5H4zM13 14h7v5h-7z",
  search: "M11 4a7 7 0 100 14 7 7 0 000-14zm9 16l-4-4",
  target: "M12 3a9 9 0 100 18 9 9 0 000-18zm0 5a4 4 0 100 8 4 4 0 000-8zm0 3.5a.5.5 0 100 1 .5.5 0 000-1z",
  mail: "M3 6h18v12H3zm0 0l9 7 9-7",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  bot: "M8 9h8M9 13h6M6 5h12a2 2 0 012 2v9a2 2 0 01-2 2h-4l-4 3v-3H6a2 2 0 01-2-2V7a2 2 0 012-2z",
  quote: "M6 4h9l5 5v11a1 1 0 01-1 1H6a1 1 0 01-1-1V5a1 1 0 011-1zm9 0v5h5M8 13h8M8 17h5",
  doc: "M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zm2 5h6M9 12h6M9 16h4",
  nurture: "M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z",
  module: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

export type { IconName };
