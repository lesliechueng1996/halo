'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

type Props = {
  children: React.ReactNode;
};

export function NextAuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function ToastProvider() {
  return (
    <>
      <Toaster position="top-right" />
    </>
  );
}
