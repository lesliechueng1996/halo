import CardLayout from './CardLayout';
import { TagIcon } from '@heroicons/react/24/outline';
import Label, { Tag } from './Label';

const tags: Tag[] = [
  {
    id: '1',
    name: 'Java',
    count: 7,
  },
  {
    id: '2',
    name: 'C++',
    count: 5,
  },
  {
    id: '3',
    name: 'Docker',
    count: 1,
  },
  {
    id: '4',
    name: 'MySQL',
    count: 2,
  },
  {
    id: '5',
    name: 'Aurora',
    count: 1,
  },
  {
    id: '6',
    name: 'Redis',
    count: 1,
  },
  {
    id: '7',
    name: 'Kubernetes',
    count: 1,
  },
  {
    id: '8',
    name: 'Linux',
    count: 1,
  },
  {
    id: '9',
    name: 'Python',
    count: 1,
  },
  {
    id: '10',
    name: 'Go',
    count: 1,
  },
];

function LabelPanel() {
  return (
    <div className="w-80">
      <CardLayout icon={<TagIcon className="w-6 h-6" />} title="标签目录">
        <div>
          <div className="flex gap-x-5 flex-wrap text-sm mb-5">
            {tags.map((tag) => (
              <Label key={tag.id} {...tag} />
            ))}
          </div>
          <div className="border-b-2 border-label-colorful inline-block">
            <span className="text-content-main">查看更多 ...</span>
          </div>
        </div>
      </CardLayout>
    </div>
  );
}

export default LabelPanel;
