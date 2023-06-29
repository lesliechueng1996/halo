'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChangeEvent, useEffect, useState, FocusEvent } from 'react';

type Props = {
  total: number;
  pageSizeOptions?: number[];
  pageSize: number;
  current: number;
  onPageChange: (page: number, pageSize: number) => void;
};

const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20];

function Pagination({
  total,
  pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
  pageSize,
  current,
  onPageChange,
}: Props) {
  const [goPage, setGoPage] = useState(current);

  const totalPage = Math.ceil(total / pageSize);

  useEffect(() => {
    setGoPage(current);
  }, [current]);

  const handlePageSizeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onPageChange(current, Number(e.target.value));
  };

  const handlePrevPage = () => {
    if (current === 1) {
      return;
    }
    onPageChange(current - 1, pageSize);
  };

  const handleNextPage = () => {
    if (current === totalPage) {
      return;
    }
    onPageChange(current + 1, pageSize);
  };

  const handleGoPageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^\d+$/.test(e.target.value)) {
      setGoPage(Number(e.target.value));
    }
  };

  const handleGoPageBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    let number = Number(e.target.value);
    if (isNaN(number)) {
      number = 1;
    }
    if (number < 1) {
      number = 1;
    } else if (number > totalPage) {
      number = totalPage;
    }
    onPageChange(number, pageSize);
  };

  return (
    <div className="flex items-center justify-end gap-5 text-xs">
      <div className="space-x-2">
        <span>共</span>
        <span>{total}</span>
        <span>条</span>
      </div>
      <select
        value={pageSize}
        className="outline-none px-3 py-1 border border-neutral-300 rounded-sm focus:border-sky-500 hover:border-sky-500 cursor-pointer"
        onChange={handlePageSizeChange}
      >
        {pageSizeOptions.map((size) => (
          <option key={size} value={size}>{`${size}条/页`}</option>
        ))}
      </select>
      <div className="flex items-center gap-2 font-bold">
        <button
          className={`w-7 h-7 rounded-sm bg-neutral-200 flex items-center justify-center disabled:bg-neutral-100 disabled:text-neutral-400 ${
            current === 1 && 'cursor-not-allowed'
          }`}
          disabled={current === 1}
          onClick={handlePrevPage}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        {current > 1 && (
          <button
            className="w-7 h-7 rounded-sm bg-neutral-200 flex items-center justify-center hover:text-blue-500"
            onClick={() => onPageChange(current - 1, pageSize)}
          >
            {current - 1}
          </button>
        )}
        <button className="w-7 h-7 rounded-sm bg-blue-500 text-white flex items-center justify-center cursor-default">
          {current}
        </button>
        {current < totalPage && (
          <button
            className="w-7 h-7 rounded-sm bg-neutral-200 flex items-center justify-center hover:text-blue-500"
            onClick={() => onPageChange(current + 1, pageSize)}
          >
            {current + 1}
          </button>
        )}
        <button
          className={`w-7 h-7 rounded-sm bg-neutral-200 flex items-center justify-center disabled:bg-neutral-100 disabled:text-neutral-400 ${
            current === totalPage && 'cursor-not-allowed'
          }`}
          disabled={current === totalPage}
          onClick={handleNextPage}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="space-x-1">
        <span>前往</span>
        <input
          type="text"
          value={goPage}
          onChange={handleGoPageChange}
          onBlur={(e) => handleGoPageBlur(e)}
          className="w-16 outline-none px-3 py-1 border border-neutral-300 rounded-sm focus:border-sky-500 hover:border-sky-500"
        />
        <span>页</span>
      </div>
    </div>
  );
}

export default Pagination;
