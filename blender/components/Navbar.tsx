'use client';

import Link from 'next/link';

const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'how it works', href: '/#how-it-works' },
  { label: 'prizes', href: '/#prizes' },
  { label: 'faq', href: '/#faq' },
  { label: 'guides', href: '/guides' },
];

type NavbarProps = {
  onReopenPopup?: () => void;
};

export default function Navbar({ onReopenPopup }: NavbarProps) {
  return (
    <nav
      style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.25)' }}
      className="site-nav flex items-center justify-between px-8 py-4 sticky top-0 z-50"
    >
      <div className="flex items-center gap-3 min-w-0">
        <Link
          href="/"
          className="font-bold text-white text-lg shrink-0 hover:opacity-80 transition-opacity"
          style={{ fontFamily: 'var(--font-dynapuff)' }}
        >
          blender
        </Link>
        {onReopenPopup ? (
          <button type="button" className="popup-reopen-btn" onClick={onReopenPopup}>
            click to reopen popup
          </button>
        ) : null}
      </div>
      <div className="flex gap-8 shrink-0">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-white font-bold text-sm hover:opacity-60 transition-opacity"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
