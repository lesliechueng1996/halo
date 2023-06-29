'use client';

import AddButton from '@/components/AddButton';
import ContentLayout from '@/components/ContentLayout';
import DataTable, { Column, DataType } from '@/components/DataTable';
import DeleteBatchButton from '@/components/DeleteBatchButton';
import Pagination from '@/components/Pagination';
import Search from '@/components/Search';
import { useState } from 'react';

const headers: Column[] = [
  {
    text: '分类名',
    field: 'name',
  },
  {
    text: '文章量',
    field: 'articleCount',
  },
  {
    text: '创建时间',
    field: 'createdTime',
  },
];

const data: DataType[] = [
  {
    id: '1',
    name: '分类1',
    articleCount: '1',
    createdTime: '123456',
  },
];

const operations = (row: DataType) => {
  return (
    <div className="flex gap-2">
      <button className="blue-button">编辑</button>
      <button className="red-button">删除</button>
    </div>
  );
};

function CategoriesPage() {
  const [pageObj, setPageObj] = useState({
    current: 1,
    pageSize: 10,
  });

  return (
    <ContentLayout title="分类管理">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <AddButton onClick={() => {}}></AddButton>
          <DeleteBatchButton
            enabled={false}
            onClick={() => {}}
          ></DeleteBatchButton>
        </div>
        <Search
          placeholder="请输入分类名"
          onSearch={(value) => console.log(value)}
        />
      </div>
      <DataTable
        headers={headers}
        data={data}
        checkable
        operations={operations}
        className="mb-5"
      />
      <Pagination
        current={pageObj.current}
        pageSize={pageObj.pageSize}
        total={16}
        onPageChange={(page, size) =>
          setPageObj({ current: page, pageSize: size })
        }
      />
    </ContentLayout>
  );
}

export default CategoriesPage;
