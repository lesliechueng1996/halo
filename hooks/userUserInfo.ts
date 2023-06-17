'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

function useUserInfo() {
  const { data: session } = useSession();
  const { data: user, error } = useSWR(
    session ? `/api/user-info/${session.user.userId}` : null
  );
  const [avatarUrl, setAvatarUrl] = useState<string>(
    'https://ui-avatars.com/api/?background=random&name=User'
  );

  useEffect(() => {
    setAvatarUrl('https://ui-avatars.com/api/?background=random&name=User');
  }, [error, setAvatarUrl]);

  useEffect(() => {
    if (user) {
      if (user.avatar) {
        setAvatarUrl(
          `${process.env.NEXT_PUBLIC_AVATAR_HOSTNAME}${user.avatar}`
        );
      } else {
        const param = user.nickname.replace(' ', '+');
        setAvatarUrl(
          `https://ui-avatars.com/api/?background=random&name=${param}`
        );
      }
    }
  }, [user, setAvatarUrl]);

  return {
    user,
    error,
    avatarUrl,
  };
}

export default useUserInfo;
