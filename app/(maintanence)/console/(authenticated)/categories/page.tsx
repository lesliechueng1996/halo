'use client';

import AddButton from '@/components/AddButton';
import ContentLayout from '@/components/ContentLayout';
import { Column, DataType } from '@/components/DataTable';
import DeleteBatchButton from '@/components/DeleteBatchButton';
import Search from '@/components/Search';
import NewAndEditCategories from '@/components/categories/NewAndEditCategories';
import useDialog from '@/hooks/useDialog';
import { useState } from 'react';
import useTable from '@/hooks/useTable';
import { toast } from 'react-hot-toast';

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
    field: 'createTime',
  },
];

function CategoriesPage() {
  const [keyword, setKeyword] = useState('');

  const operations = (row: DataType) => {
    return (
      <div className="flex gap-2">
        <button className="blue-button">编辑</button>
        <button className="red-button" onClick={() => removeItem(row.id)}>
          删除
        </button>
      </div>
    );
  };

  const removeItem = async (id: string) => {
    try {
      const response = await fetch(`/api/category/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const body = await response.json();
        toast.error(body.msg);
        return;
      }
      refresh();
    } catch (e) {
      toast.error('删除失败');
    }
  };

  const { PaginationTable, refresh } = useTable({
    url: `/api/category/page`,
    headers,
    operations,
    keyword,
  });

  const { Dialog, showModal, closeModal, dialogRef } = useDialog({
    title: '添加分类',
    className: 'w-96',
    onClose: () => {
      if (dialogRef.current?.returnValue) {
        refresh();
      }
    },
  });

  return (
    <ContentLayout title="分类管理">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <AddButton onClick={showModal}></AddButton>
          <DeleteBatchButton
            enabled={false}
            onClick={() => {}}
          ></DeleteBatchButton>
        </div>
        <Search
          placeholder="请输入分类名"
          onSearch={(value) => setKeyword(value)}
        />
      </div>
      <PaginationTable />

      <Dialog>
        <NewAndEditCategories closeModal={closeModal} />
      </Dialog>
    </ContentLayout>
  );
}

export default CategoriesPage;
