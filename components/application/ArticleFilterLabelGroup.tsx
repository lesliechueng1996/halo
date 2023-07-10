'use client';

import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

type Props = {
  labels: {
    id: string;
    text: string;
    count: number;
  }[];
  className?: string;
};

function ArticleFilterLabelGroup({ labels, className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex gap-3 flex-wrap pr-10 overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-10'
        }`}
      >
        <button className="gradient-bg text-label px-6 py-2 rounded-lg hover:text-content-main">
          全部
        </button>
        {labels.map((label) => (
          <button
            className="bg-deep-background px-6 py-2 rounded-lg text-content-main hover:text-content-sub"
            key={label.id}
          >
            {label.text}
          </button>
        ))}
      </div>

      <div
        className="absolute right-0 top-2 text-content-main cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronDoubleUpIcon className="w-6 h-6" />
        ) : (
          <ChevronDoubleDownIcon className="w-6 h-6" />
        )}
      </div>
    </div>
  );
}

export default ArticleFilterLabelGroup;
