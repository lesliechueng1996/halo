import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const NAV_ITEM_STYLE =
  'cursor-pointer rounded-lg px-3 py-2 hover:bg-background transition-colors duration-500';

const TOOL_ITEM_STYLE =
  'cursor-pointer hover:text-slate-300 transition-colors duration-500';

function AppHeader() {
  return (
    <header className="h-24 pt-4 flex items-center gap-10 font-bold text-label justify-between">
      <Link
        href="/"
        className="shrink-0 cursor-pointer flex flex-col items-center"
      >
        <h1 className="text-3xl">花未眠</h1>
        <h2 className="text-xs">HUAWEIMIAN</h2>
      </Link>
      <nav className="hidden lg:flex items-center gap-3 grow shrink-0">
        <Link href="/" className={NAV_ITEM_STYLE}>
          首页
        </Link>
        <Link href="/talks" className={NAV_ITEM_STYLE}>
          说说
        </Link>
        <Link href="/about" className={NAV_ITEM_STYLE}>
          关于
        </Link>
        <div className={NAV_ITEM_STYLE}>归档</div>
        <Link href="/tags" className={NAV_ITEM_STYLE}>
          标签
        </Link>
        <Link href="/message" className={NAV_ITEM_STYLE}>
          留言
        </Link>
        <div className={NAV_ITEM_STYLE}>友链</div>
        <div className={NAV_ITEM_STYLE}>相册</div>
      </nav>
      <div className="shrink-0 flex items-center gap-5">
        <div className={TOOL_ITEM_STYLE}>
          <MagnifyingGlassIcon className="w-6 h-6" />
        </div>
        <div className={TOOL_ITEM_STYLE}>登录</div>
        <div className={TOOL_ITEM_STYLE}>切换</div>
      </div>
    </header>
  );
}

export default AppHeader;
