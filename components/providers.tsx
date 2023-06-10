'use client';

import { SessionProvider } from 'next-auth/react';
import { Toaster, toast } from 'react-hot-toast';
import { SWRConfig } from 'swr';

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

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: { info?: any; status?: number } = {};
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export function SWRProvider({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher,
        shouldRetryOnError: false,
        onError: (error) => {
          toast.error(error.info?.msg ?? '系统异常');
        },
      }}
    >
      {children}
    </SWRConfig>
  );
}
