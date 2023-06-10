'use client';

import {
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import { signOut } from 'next-auth/react';

type Props = {
  isExpand: boolean;
  onChangeExpand: () => void;
};

function ConsoleHeader({ isExpand, onChangeExpand }: Props) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const overlayRoot = useRef<HTMLElement | undefined>(undefined);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = useCallback((event: MouseEvent<HTMLDivElement>) => {
    timeoutRef.current && clearTimeout(timeoutRef.current);

    const dom = document.getElementById('overlay-avatar-panel')!;
    const element = event.currentTarget;
    const rect = element.getBoundingClientRect();

    dom.style.display = 'block';
    dom.style.top = `${rect.bottom + 10}px`;
    dom.style.right = `${window.innerWidth - rect.right}px`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      const dom = document.getElementById('overlay-avatar-panel')!;
      dom.style.display = 'none';
    }, 500);
  }, []);

  useEffect(() => {
    overlayRoot.current = document.getElementById('overlay-root')!;
  }, []);

  const toggleFullScreen = () => {
    const element = document.documentElement;
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      element.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <header className="h-14 w-full shadow-md px-3 flex items-center justify-between">
      <div className="cursor-pointer" onClick={onChangeExpand}>
        {isExpand ? (
          <Bars3BottomLeftIcon className="w-6 h-6" />
        ) : (
          <Bars3BottomRightIcon className="w-6 h-6" />
        )}
      </div>
      <div className="flex items-center gap-5">
        {isFullScreen ? (
          <ArrowsPointingInIcon
            className="w-6 h-6 cursor-pointer"
            onClick={toggleFullScreen}
          />
        ) : (
          <ArrowsPointingOutIcon
            className="w-6 h-6 cursor-pointer"
            onClick={toggleFullScreen}
          />
        )}

        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Image
            src="https://ui-avatars.com/api/?background=random&name=Leslie+Zhang"
            alt="avatar"
            width={40}
            height={40}
            className="rounded-full cursor-pointer"
          />
        </div>
        {overlayRoot.current &&
          ReactDOM.createPortal(
            <div
              id="overlay-avatar-panel"
              className="hidden fixed text-neutral-800 shadow-md space-y-2 py-2"
              onMouseEnter={() => {
                timeoutRef.current && clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className="px-5 py-3 flex gap-2 items-center hover:bg-sky-200 cursor-pointer">
                <UserIcon className="w-4 h-4" />
                <span>个人中心</span>
              </div>
              <div className="w-full h-[1px] bg-slate-200" />
              <div
                className="px-5 py-3 flex gap-2 items-center hover:bg-sky-200 cursor-pointer"
                onClick={() => signOut({ redirect: false })}
              >
                <ArrowLeftOnRectangleIcon className="w-4 h-4" />
                <span>退出登录</span>
              </div>
            </div>,
            overlayRoot.current
          )}
      </div>
    </header>
  );
}

export default ConsoleHeader;
