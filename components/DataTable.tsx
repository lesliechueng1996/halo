'use client';

import { ChangeEvent, useState } from 'react';

export type Column = {
  text: string;
  field: string;
};

export type DataType = { id: string } & { [key: Column['field']]: string };

type Props<DataType> = {
  className?: string;
  headers: Column[];
  data: DataType[];
  checkable?: boolean;
  operations?: (row: DataType) => JSX.Element;
};

function DataTable({
  className,
  headers,
  data,
  checkable,
  operations,
}: Props<DataType>) {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const handleRowCheck = (
    e: ChangeEvent<HTMLInputElement>,
    rowData: DataType
  ) => {
    if (e.target.checked) {
      setCheckedIds((checkedIds) => [...checkedIds, rowData.id]);
    } else {
      setCheckedIds((checkedIds) =>
        checkedIds.filter((id) => id !== rowData.id)
      );
    }
  };

  const handleTableCheck = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setCheckedIds(data.map((row) => row.id));
    } else {
      setCheckedIds([]);
    }
  };

  return (
    <div
      className={`w-full text-sm text-neutral-500 overflow-x-auto ${className}`}
    >
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="h-10">
            {checkable && (
              <th className="border border-slate-200 font-normal">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={
                      checkedIds.length !== 0 &&
                      checkedIds.length === data.length
                    }
                    onChange={handleTableCheck}
                  />
                </div>
              </th>
            )}
            {headers.map((header) => (
              <th
                className="border border-slate-200 font-normal"
                key={header.field}
              >
                {header.text}
              </th>
            ))}
            {operations && (
              <th className="border border-slate-200 font-normal">操作</th>
            )}
          </tr>
        </thead>
        {data.length > 0 && (
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="h-10 hover:bg-slate-100">
                {checkable && (
                  <td className="border border-slate-200 font-normal">
                    <div className="flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={checkedIds.includes(row.id)}
                        onChange={(e) => handleRowCheck(e, row)}
                      />
                    </div>
                  </td>
                )}
                {headers.map((header) => (
                  <td
                    className="border border-slate-200"
                    key={`${row.id}-${header.field}`}
                  >
                    <div className="flex items-center justify-center">
                      {row[header.field]}
                    </div>
                  </td>
                ))}
                {operations && (
                  <td className="border border-slate-200">
                    <div className="flex justify-center items-center">
                      {operations(row)}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {data.length === 0 && (
        <div className="w-full h-20 border border-slate-200 border-t-0 leading-[5rem] text-center">
          暂无数据
        </div>
      )}
    </div>
  );
}

export default DataTable;
