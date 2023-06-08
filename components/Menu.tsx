'use client';

import { useState } from 'react';
import MenuItemComponent from './MenuItem';
import { usePathname } from 'next/navigation';

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

  const [menus, setMenus] = useState<MenuItemType[]>(() => {
    let array: MenuItemType[] = [];
    inputMenus.forEach((menu) => {
      array.push({
        ...menu,
        isExpand: false,
      });
    });
    return array;
  });

  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto bg-sky-950 w-60">
      {menus.map((menu) => (
        <div key={menu.id}>
          <MenuItemComponent
            menu={menu}
            hasChildren={!!menu.children && menu.children.length > 0}
            isExpand={menu.isExpand}
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
              }
            }}
          />
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
                    hasChildren={false}
                    isExpand={false}
                    subMenu={true}
                    className={pathname === menu.url ? 'text-sky-500' : ''}
                    onClick={(item) => {
                      console.log(item);
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
