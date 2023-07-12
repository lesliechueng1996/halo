import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import MySelf from '@/components/MySelf';
import TalkCard from '@/components/TalkCard';

const talks = [
  {
    id: '1',
    name: '花未眠',
    time: '13:14:57, 九月 21, 2022',
    commentCount: 35,
    content:
      '我是一只小小小小鸟，想要飞却飞也飞不高，我寻寻觅觅一个温暖的怀抱，这样的要求算不算太高',
  },
];

function TalkPage() {
  return (
    <div className="pt-5">
      <BreadcrumbTitle title="说说" className="mb-5" />
      <div className="flex items-start gap-5">
        <div className="grow">
          {talks.map((talk) => (
            <TalkCard key={talk.id} {...talk} />
          ))}
        </div>
        <MySelf className="hidden lg:block shrink-0" />
      </div>
    </div>
  );
}

export default TalkPage;
