import StatisticsItem from './StatisticsItem';

type Props = {
  className?: string;
};

function MySelf({ className }: Props) {
  return (
    <div className={className}>
      <div className="w-80 h-[30rem] rounded-2xl gradient-bg px-1 pb-1 pt-10 relative">
        <div className="rounded-2xl w-full h-full bg-background flex flex-col items-center pt-24 px-10 pb-10">
          <div className="text-label font-bold text-3xl mb-2">花未眠</div>
          <div className="h-1.5 w-16 gradient-bg mb-5" />
          <p className="text-content-main mb-20">一个疯狂的coder</p>
          <div>
            <div className="h-8 w-8 rounded-full bg-white"></div>
          </div>
          <div className="w-full flex justify-between mt-auto">
            <StatisticsItem title="文章" count={16} />
            <StatisticsItem title="说说" count={5} />
            <StatisticsItem title="分类" count={9} />
            <StatisticsItem title="标签" count={10} />
          </div>
        </div>
        <div className="w-24 h-24 rounded-full bg-white absolute top-5 left-1/2 -ml-12 border-4 border-black"></div>
      </div>
    </div>
  );
}

export default MySelf;
