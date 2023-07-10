'use client';

import {
  EllipsisHorizontalIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef } from 'react';

function FlowBar() {
  const flowRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const scrolling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const persent = (offset / height) * 100;

    if (persent > 5) {
      rocketRef.current!.style.setProperty('transform', 'translateY(-4rem)');
    } else {
      rocketRef.current!.style.setProperty('transform', 'translateY(0)');
    }

    if (!scrolling.current) {
      scrolling.current = true;
      flowRef.current!.style.setProperty('--length', '2.5rem');
      flowRef.current!.classList.remove('animate-move-right-reserve');
      flowRef.current!.classList.add('animate-move-right');
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    timeoutRef.current = setTimeout(() => {
      flowRef.current!.style.setProperty('--length', '2.5rem');
      flowRef.current!.classList.remove('animate-move-right');
      flowRef.current!.classList.add('animate-move-right-reserve');
      scrolling.current = false;
    }, 1000);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, []);

  return (
    <div className="relative" ref={flowRef}>
      <div
        className="absolute w-12 h-12 flex justify-center items-center transition-transform duration-300 ease-in-out cursor-pointer text-label"
        ref={rocketRef}
      >
        <RocketLaunchIcon className="w-8 h-8" />
      </div>
      <div className="absolute gradient-bg w-12 h-12 rounded-full border-2 border-label flex justify-center items-center text-label cursor-pointer">
        <EllipsisHorizontalIcon className="w-8 h-8" />
      </div>
    </div>
  );
}

export default FlowBar;
