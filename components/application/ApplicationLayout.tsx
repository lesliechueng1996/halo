'use client';

import AppHeader from './AppHeader';
import FlowBar from './FlowBar';
import { useAnimate } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import SideMenu from './SideMenu';

type Props = {
  children: React.ReactNode;
};

function ApplicationLayout({ children }: Props) {
  const [scope, animate] = useAnimate();
  const router = useRouter();
  const [showSideMenu, setShowSideMenu] = useState(false);

  const closeSideMenu = useCallback(() => {
    animate(
      '.main',
      {
        x: '0',
        y: '0',
        borderRadius: '0',
      },
      {
        duration: 0.3,
        type: 'spring',
        bounce: 0.5,
      }
    );

    animate(
      '.side',
      {
        y: '-100%',
        opacity: 0,
      },
      {
        duration: 0.3,
        type: 'spring',
        bounce: 0.5,
      }
    );
  }, [animate]);

  const handleFlowMenuClick = useCallback(() => {
    if (!showSideMenu) {
      animate(
        '.main',
        {
          x: '18rem',
          y: '3rem',
          borderRadius: '1rem',
        },
        {
          duration: 0.3,
          type: 'spring',
          bounce: 0.5,
          stiffness: 300,
        }
      );

      animate(
        '.side',
        {
          y: '0',
          opacity: 1,
        },
        {
          duration: 0.3,
          type: 'spring',
          bounce: 0.5,
        }
      );
    } else {
      closeSideMenu();
    }
    setShowSideMenu(!showSideMenu);
  }, [animate, closeSideMenu, showSideMenu]);

  const handleChangeMenu = useCallback(
    (uri: string) => {
      router.push(uri);
      closeSideMenu();
      setShowSideMenu(false);
    },
    [closeSideMenu, router]
  );

  return (
    <div className="relative" ref={scope}>
      <div className="main w-screen bg-[url('/images/bg.jpeg')] bg-no-repeat bg-cover min-h-screen">
        <div className="max-w-7xl mx-auto px-10 pb-20">
          <AppHeader />
          {children}
        </div>
      </div>

      <div className="side block lg:hidden absolute top-0 left-0 w-72 pt-12 -translate-y-full opacity-0">
        <SideMenu onMenuClick={handleChangeMenu} />
      </div>

      <div className="fixed bottom-20 right-16">
        <FlowBar onMenuClick={handleFlowMenuClick} />
      </div>
    </div>
  );
}

export default ApplicationLayout;
