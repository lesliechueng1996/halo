'use client';

import { redirect } from 'next/navigation';
import Menu from '@/components/Menu';
import { useSession } from 'next-auth/react';
import ConsoleHeader from '@/components/ConsoleHeader';
import { useState } from 'react';

const menus = [
  {
    id: 1,
    icon: 'house-door-fill',
    name: '首页',
    url: '/console',
  },
  {
    id: 2,
    icon: 'file-medical-fill',
    name: '文章管理',
    children: [
      {
        id: 3,
        icon: 'file-earmark-plus',
        name: '发布文章',
        url: '/console/articles/create',
      },
      { id: 4, icon: 'files', name: '文章列表', url: '/console/articles' },
      {
        id: 5,
        icon: 'bookmarks-fill',
        name: '分类管理',
        url: '/console/categories',
      },
      { id: 6, icon: 'tags-fill', name: '标签管理', url: '/console/tags' },
    ],
  },
  {
    id: 7,
    icon: 'chat-heart-fill',
    name: '说说管理',
    children: [
      {
        id: 8,
        icon: 'chat-square-quote-fill',
        name: '说说列表',
        url: '/console/talk',
      },
      {
        id: 9,
        icon: 'chat-left-dots-fill',
        name: '发布说说',
        url: '/console/talk/create',
      },
    ],
  },
];

type Props = {
  children: React.ReactNode;
};

function ConsoleLayout({ children }: Props) {
  const { status } = useSession();

  if (status === 'unauthenticated') {
    redirect('/console/login');
  }

  const [isExpand, setIsExpand] = useState(true);

  return (
    <div className="flex">
      <aside className="flex-shrink-0">
        <Menu menus={menus} isExpand={isExpand} />
      </aside>
      <main className="flex-grow">
        <ConsoleHeader
          isExpand={isExpand}
          onChangeExpand={() => setIsExpand(!isExpand)}
        />
        <section>{children}</section>
      </main>
    </div>
  );
}

export default ConsoleLayout;
