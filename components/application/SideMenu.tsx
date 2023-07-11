import StatisticsItem from './StatisticsItem';

type Props = {
  onMenuClick: (uri: string) => void;
};

function SideMenu({ onMenuClick }: Props) {
  return (
    <div className="flex flex-col items-center ">
      <div className="mb-2">
        <div className="h-24 w-24 rounded-full bg-white"></div>
      </div>

      <div className="text-label font-bold text-4xl mb-2">花未眠</div>
      <div className="h-1.5 w-16 gradient-bg mb-5" />
      <p className="text-content-main mb-20">一个疯狂的coder</p>

      <div className="w-full flex justify-between mt-auto px-12 mb-10">
        <StatisticsItem title="文章" count={16} />
        <StatisticsItem title="分类" count={9} />
        <StatisticsItem title="标签" count={10} />
      </div>

      <div className="flex flex-col items-center gap-2 text-label">
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          首页
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/talks')}>
          说说
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/about')}>
          关于
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          归档
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          标签
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          留言
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          友链
        </span>
        <span className="cursor-pointer" onClick={() => onMenuClick('/')}>
          相册
        </span>
      </div>
    </div>
  );
}

export default SideMenu;
