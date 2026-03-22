'use client';

type NavbarProps = {
  onReopenPopup?: () => void;
};

export default function Navbar({ onReopenPopup }: NavbarProps) {
  return (
    <nav
      style={{ backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.25)' }}
      className="flex items-center justify-between px-8 py-4 sticky top-0 z-50"
    >
      <div className="flex items-center gap-3 min-w-0">
        <span
          className="font-bold text-white text-lg shrink-0"
          style={{ fontFamily: 'var(--font-dynapuff)' }}
        >
          blender
        </span>
        {onReopenPopup ? (
          <button type="button" className="popup-reopen-btn" onClick={onReopenPopup}>
            click to reopen popup
          </button>
        ) : null}
      </div>
      <div className="flex gap-8 shrink-0">
        {['how it works', 'prizes', 'faq'].map((link) => (
          <a
            key={link}
            href={`#${link.replace(/ /g, '-')}`}
            className="text-white font-bold text-sm hover:opacity-60 transition-opacity"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}
