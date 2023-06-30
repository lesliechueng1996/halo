'use client';

import DataTable, { Column, DataType } from '@/components/DataTable';
import Pagination from '@/components/Pagination';
import qs from 'qs';
import { useCallback, useState } from 'react';
import useSWR from 'swr';

type Props = {
  url: string;
  headers: Column[];
  operations: (row: DataType) => JSX.Element;
  keyword: string;
};

function useTable({ url, headers, operations, keyword }: Props) {
  const [pageObj, setPageObj] = useState({
    current: 1,
    pageSize: 10,
  });

  const { data: pageData, mutate } = useSWR<PageResponse<DataType>>(
    `${url}?${qs.stringify({
      page: pageObj.current,
      limit: pageObj.pageSize,
      keyword,
    })}`
  );

  const refresh = useCallback(() => {
    mutate();
  }, [mutate]);

  // const insertData = useCallback((data: any) => {

  // }, []);

  // const deleteItem = useCallback(
  //   (id: string) => {
  //     if (!pageData) {
  //       return;
  //     }
  //     const newList = pageData.list.filter((item) => item.id !== id);
  //     mutate({ list: newList, total: pageData.total - 1 });
  //   },
  //   [pageData, mutate]
  // );

  const { total, list } = pageData || {
    total: 0,
    list: [],
  };

  const PaginationTable = () => (
    <div>
      <DataTable
        headers={headers}
        data={list}
        checkable
        operations={operations}
        className="mb-5"
      />
      <Pagination
        current={pageObj.current}
        pageSize={pageObj.pageSize}
        total={total}
        onPageChange={(page, size) =>
          setPageObj({ current: page, pageSize: size })
        }
      />
    </div>
  );

  return {
    PaginationTable,
    refresh,
  };
}

export default useTable;
