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

const ACTIVE_BUTTON_CLASS = 'gradient-bg text-label hover:text-content-main';
const INACTIVE_BUTTON_CLASS =
  'bg-deep-background text-content-main hover:text-content-sub';

function ArticleFilterLabelGroup({ labels, className }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeId, setActiveId] = useState('');

  const handleActive = (id: string) => {
    setActiveId(id);
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`flex gap-3 flex-wrap pr-10 overflow-hidden ${
          isExpanded ? 'h-auto' : 'h-10'
        }`}
      >
        <button
          className={`px-6 py-2 rounded-lg ${
            activeId === '' ? ACTIVE_BUTTON_CLASS : INACTIVE_BUTTON_CLASS
          }`}
          onClick={() => handleActive('')}
        >
          全部
        </button>
        {labels.map((label) => (
          <button
            className={`px-6 py-2 rounded-lg ${
              activeId === label.id
                ? ACTIVE_BUTTON_CLASS
                : INACTIVE_BUTTON_CLASS
            }`}
            key={label.id}
            onClick={() => handleActive(label.id)}
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
