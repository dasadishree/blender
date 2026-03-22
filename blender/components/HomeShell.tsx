'use client';

import { useState, type ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Popup from '@/components/Popup';

export default function HomeShell({ children }: { children: ReactNode }) {
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <>
      <Popup open={popupOpen} onClose={() => setPopupOpen(false)} />
      <main>
        <Navbar onReopenPopup={() => setPopupOpen(true)} />
        {children}
      </main>
    </>
  );
}
