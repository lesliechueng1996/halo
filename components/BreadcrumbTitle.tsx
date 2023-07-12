import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  title: string;
  className?: string;
};

function BreadcrumbTitle({ title, className }: Props) {
  return (
    <div className={`text-label ${className}`}>
      <div className="flex gap-1 items-center mb-2">
        <Link href="/">首页</Link>
        <ChevronRightIcon className="w-4 h-4" />
        <span>{title}</span>
      </div>
      <h2 className="text-4xl">{title}</h2>
    </div>
  );
}

export default BreadcrumbTitle;
