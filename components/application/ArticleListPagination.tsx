'use client';

import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

type Props = {
  total: number;
};

function ArticleListPagination({ total }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="flex items-center gap-3">
      {currentPage > 1 && (
        <div className="flex items-center gap-3">
          <ArrowLongLeftIcon className="w-4 h-4 text-label-colorful" />
          <span className="text-label">新的</span>
        </div>
      )}
      <div className="text-label-colorful">{currentPage}</div>
      {currentPage < total && (
        <div className="flex items-center gap-3">
          <span className="text-label">以往</span>
          <ArrowLongRightIcon className="w-4 h-4 text-label-colorful" />
        </div>
      )}
    </div>
  );
}

export default ArticleListPagination;
