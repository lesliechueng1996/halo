'use client';

import {
  EllipsisHorizontalIcon,
  RocketLaunchIcon,
  XMarkIcon,
  HomeModernIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useAnimate } from 'framer-motion';
import { useRouter } from 'next/navigation';

const rocketAnimation = {
  show: {
    to: { y: '-4rem' },
    options: {
      duration: 0.3,
      type: 'spring',
      bounce: 0.5,
      stiffness: 300,
    },
  },
  hide: {
    to: { y: '0' },
    options: {
      duration: 0.3,
      type: 'spring',
      bounce: 0.5,
    },
  },
} as const;

const flowAnimation = {
  fix: {
    to: {
      x: '0',
    },
    options: {
      duration: 0.5,
      type: 'spring',
      bounce: 0.5,
      stiffness: 300,
    },
  },
  scrolling: {
    to: {
      x: '2.5rem',
    },
    options: {
      duration: 0.5,
      type: 'spring',
      bounce: 0.5,
      stiffness: 300,
    },
  },
} as const;

const subMenuAnimation = {
  search: {
    show: {
      y: '-5rem',
    },
    hide: {
      y: '0',
    },
  },
  home: {
    show: {
      x: '-4rem',
      y: '-4rem',
    },
    hide: {
      x: '0',
      y: '0',
    },
  },
  rocket: {
    show: {
      x: '-5rem',
    },
    hide: {
      x: '0',
    },
  },
  openOptions: {
    duration: 0.3,
    type: 'spring',
    bounce: 0.5,
    stiffness: 300,
  },
  closeOptions: {
    duration: 0.3,
    type: 'spring',
    bounce: 0,
  },
} as const;

function FlowBar() {
  const scrolling = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [percent, setPercent] = useState<number>(0);
  const [showSubmenu, setShowSubmenu] = useState<boolean>(false);
  const [scope, animate] = useAnimate();
  const route = useRouter();

  const playShowSubMenu = useCallback(() => {
    animate(
      '.menu-rocket',
      subMenuAnimation.rocket.show,
      subMenuAnimation.openOptions
    );
    animate(
      '.menu-home',
      subMenuAnimation.home.show,
      subMenuAnimation.openOptions
    );
    animate(
      '.menu-search',
      subMenuAnimation.search.show,
      subMenuAnimation.openOptions
    );
  }, [animate]);

  const playHideSubMenu = useCallback(() => {
    animate(
      '.menu-rocket',
      subMenuAnimation.rocket.hide,
      subMenuAnimation.closeOptions
    );
    animate(
      '.menu-home',
      subMenuAnimation.home.hide,
      subMenuAnimation.closeOptions
    );
    animate(
      '.menu-search',
      subMenuAnimation.search.hide,
      subMenuAnimation.closeOptions
    );
  }, [animate]);

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const percent = (offset / height) * 100;

    setPercent(percent);

    if (percent > 5) {
      animate('.rocket', rocketAnimation.show.to, rocketAnimation.show.options);
    } else {
      animate('.rocket', rocketAnimation.hide.to, rocketAnimation.hide.options);
    }

    if (!scrolling.current) {
      scrolling.current = true;
      setShowSubmenu(false);
      playHideSubMenu();

      animate(
        scope.current,
        flowAnimation.scrolling.to,
        flowAnimation.scrolling.options
      );
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }

    timeoutRef.current = setTimeout(() => {
      animate(scope.current, flowAnimation.fix.to, flowAnimation.fix.options);
      scrolling.current = false;
    }, 1000);
  }, [animate, scope, playHideSubMenu]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });
  }, [handleScroll]);

  const handleFlowBarClick = () => {
    if (showSubmenu) {
      playHideSubMenu();
    } else {
      playShowSubMenu();
    }
    setShowSubmenu(!showSubmenu);
  };

  return (
    <div className="relative" ref={scope}>
      <div
        className={`rocket absolute w-12 h-12 ${
          showSubmenu ? 'hidden' : 'flex'
        } justify-center items-center cursor-pointer text-label`}
        onClick={() => scrollTo(0, 0)}
      >
        <RocketLaunchIcon className="w-8 h-8 -rotate-45" />
      </div>

      <div
        className="menu-rocket absolute w-12 h-12 gradient-bg rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => scrollTo(0, 0)}
      >
        <div className="bg-background rounded-full w-11 h-11 flex justify-center items-center text-label">
          <RocketLaunchIcon className="w-6 h-6 -rotate-45" />
        </div>
      </div>

      <div
        className="menu-home absolute w-12 h-12 gradient-bg rounded-full flex justify-center items-center cursor-pointer"
        onClick={() => route.push('/')}
      >
        <div className="bg-background rounded-full w-11 h-11 flex justify-center items-center text-label">
          <HomeModernIcon className="w-6 h-6" />
        </div>
      </div>

      <div className="menu-search absolute w-12 h-12 gradient-bg rounded-full flex justify-center items-center cursor-pointer">
        <div className="bg-background rounded-full w-11 h-11 flex justify-center items-center text-label">
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
      </div>

      <div
        className="absolute gradient-bg w-12 h-12 rounded-full border-2 border-label flex justify-center items-center text-label cursor-pointer"
        onClick={handleFlowBarClick}
      >
        {showSubmenu ? (
          <XMarkIcon className="w-8 h-8" />
        ) : percent >= 5 ? (
          <span>{`${Math.round(percent)}%`}</span>
        ) : (
          <EllipsisHorizontalIcon className="w-8 h-8" />
        )}
      </div>
    </div>
  );
}

export default FlowBar;
