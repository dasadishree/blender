'use client';

import { useState, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Popup from '@/components/Popup';

type HomeShellProps = {
  children: ReactNode;
  bg?: string;
  showPopupReopen?: boolean;
  showPopup?: boolean;
};

export default function HomeShell({
  children,
  bg = '/bg.png',
  showPopupReopen = true,
  showPopup = true,
}: HomeShellProps) {
  const [popupOpen, setPopupOpen] = useState(showPopup);

  return (
    <>
      {showPopup ? (
        <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
      ) : null}
      <main style={{backgroundImage: `url('${bg}')`, backgroundSize: '100% auto', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'}}>
        <Navbar onReopenPopup={showPopup && showPopupReopen ? () => setPopupOpen(true) : undefined} />
        {children}
      </main>
    </>
  );
}
