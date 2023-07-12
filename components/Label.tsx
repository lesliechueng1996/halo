import React from 'react';

export type Tag = {
  id: string;
  name: string;
  count: number;
};

function Label({ id, name, count }: Tag) {
  return (
    <div className="flex items-center bg-background p-2 rounded-lg cursor-pointer hover:opacity-50 transition-opacity duration-300">
      <span className="text-content-sub mr-1">#</span>
      <span className="text-content-main mr-5">{name}</span>
      <span className="text-label-colorful-sub">{count}</span>
    </div>
  );
}

export default Label;
