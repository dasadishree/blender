import type { ReactNode } from 'react';

export default function GuidesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
  <div className="guides-route">{children}</div>
  );
}
