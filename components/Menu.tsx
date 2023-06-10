'use client';

import { useCallback, useEffect, useState, MouseEvent, useRef } from 'react';
import MenuItemComponent from './MenuItem';
import { usePathname, useRouter } from 'next/navigation';
import ReactDOM from 'react-dom';
import MouseHoverTip from './MouseHoverTip';

export interface MenuItem {
  id: number;
  icon?: string;
  name: string;
  url?: string;
  children?: MenuItem[];
}

type Props = {
  menus: MenuItem[];
  isExpand: boolean;
};

type MenuItemType = MenuItem & {
  isExpand: boolean;
};

function Menu({ menus: inputMenus, isExpand }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const initMenus = useCallback(() => {
    let array: MenuItemType[] = [];
    inputMenus.forEach((menu) => {
      array.push({
        ...menu,
        isExpand: false,
      });
    });
    return array;
  }, [inputMenus]);

  const [menus, setMenus] = useState<MenuItemType[]>(() => {
    return initMenus();
  });
  const [overlaySubMenus, setOverlaySubMenus] = useState<{
    name: string;
    children: MenuItem[];
  }>({
    name: '',
    children: [],
  });
  const overlayRoot = useRef<HTMLElement | undefined>(undefined);
  const clearOverlayTimeoutId = useRef<NodeJS.Timeout | undefined>(undefined);

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLDivElement>, hoverMenu: MenuItemType) => {
      if (isExpand) {
        return;
      }

      clearOverlayTimeoutId.current &&
        clearTimeout(clearOverlayTimeoutId.current);
      clearOverlayTimeoutId.current = undefined;
      setOverlaySubMenus({
        name: hoverMenu.name,
        children: hoverMenu.children || [],
      });
      const top = event.currentTarget.getBoundingClientRect().top;
      const right = event.currentTarget.getBoundingClientRect().right;
      const dom = document.getElementById('overlay-menu');
      if (!dom) {
        return;
      }

      if (hoverMenu.children && hoverMenu.children.length > 0) {
        dom.style.top = `${top}px`;
        dom.style.left = `${right + 10}px`;
      } else {
        // show tip
        dom.style.top = `calc(${top}px + 1.5rem - 1rem)`;
        dom.style.left = `${right}px`;
      }
      dom.style.display = 'block';
    },
    [isExpand]
  );

  const handleMouseLeave = useCallback(() => {
    if (isExpand) {
      return;
    }

    clearOverlayTimeoutId.current = setTimeout(() => {
      const dom = document.getElementById('overlay-menu');
      if (!dom) {
        return;
      }
      dom.style.display = 'none';
      clearOverlayTimeoutId.current = undefined;
    }, 500);
  }, [isExpand]);

  useEffect(() => {
    overlayRoot.current = document.getElementById('overlay-root')!;
  }, []);

  useEffect(() => {
    clearOverlayTimeoutId.current = undefined;
    setMenus(() => {
      return initMenus();
    });
  }, [setMenus, initMenus, isExpand]);

  return (
    <div
      className={`h-screen overflow-x-hidden overflow-y-auto bg-sky-950 transition-all duration-300 ${
        isExpand ? 'w-60' : 'w-14'
      }`}
    >
      {menus.map((menu) => (
        <div key={menu.id}>
          <div
            onMouseEnter={(event: MouseEvent<HTMLDivElement>) =>
              handleMouseEnter(event, menu)
            }
            onMouseLeave={handleMouseLeave}
          >
            <MenuItemComponent
              menu={menu}
              hasChildren={!!menu.children && menu.children.length > 0}
              isExpand={menu.isExpand}
              onlyIcon={!isExpand}
              className={pathname === menu.url ? 'text-sky-500' : ''}
              onClick={(item) => {
                if (item.children && item.children.length > 0) {
                  setMenus((prev) => {
                    return prev.map((menu) => {
                      if (menu.id === item.id) {
                        return {
                          ...menu,
                          isExpand: !menu.isExpand,
                        };
                      }
                      return menu;
                    });
                  });
                } else {
                  router.push(item.url || '/console');
                }
              }}
            />
          </div>
          {isExpand && (
            <div
              className="grid transition-all duration-500 ease-in-out"
              style={{ gridTemplateRows: menu.isExpand ? '1fr' : '0fr' }}
            >
              <div className="min-h-0 overflow-hidden">
                {menu.children &&
                  menu.children.map((item) => (
                    <MenuItemComponent
                      key={item.id}
                      menu={item}
                      onlyIcon={!isExpand}
                      hasChildren={false}
                      isExpand={false}
                      subMenu={true}
                      className={pathname === item.url ? 'text-sky-500' : ''}
                      onClick={(item) => {
                        router.push(item.url || '/console');
                      }}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      ))}
      {!isExpand &&
        overlayRoot.current &&
        ReactDOM.createPortal(
          <div
            id="overlay-menu"
            className={`fixed hidden overflow-hidden`}
            onMouseEnter={() => {
              if (clearOverlayTimeoutId.current) {
                clearTimeout(clearOverlayTimeoutId.current);
              }
            }}
            onMouseLeave={handleMouseLeave}
          >
            {overlaySubMenus.children.length === 0 ? (
              <MouseHoverTip text={overlaySubMenus.name} />
            ) : (
              <div className="bg-sky-950 shadow-md ">
                {overlaySubMenus.children.map((item) => (
                  <MenuItemComponent
                    key={item.id}
                    menu={item}
                    onlyIcon={false}
                    hasChildren={false}
                    isExpand={false}
                    subMenu={false}
                    className={pathname === item.url ? 'text-sky-500' : ''}
                    onClick={(item) => {
                      router.push(item.url || '/console');
                    }}
                  />
                ))}
              </div>
            )}
          </div>,
          overlayRoot.current
        )}
    </div>
  );
}

export default Menu;
