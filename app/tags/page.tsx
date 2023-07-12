import BreadcrumbTitle from '@/components/BreadcrumbTitle';
import Label, { Tag } from '@/components/Label';

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

function TagsPage() {
  return (
    <div className="pt-5">
      <BreadcrumbTitle title="标签" className="mb-5" />
      <div className="flex gap-x-5 flex-wrap text-sm mb-5 bg-background p-10 rounded-2xl">
        {tags.map((tag) => (
          <Label key={tag.id} {...tag} />
        ))}
      </div>
    </div>
  );
}

export default TagsPage;
