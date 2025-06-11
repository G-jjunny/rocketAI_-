import React from "react";
import { User } from "../model/types";
import { COLUMN_HEADERS, ROW_HEADERS, TABLE_TILES } from "../model/table";
import { DataTile } from "./DataTile";
import { EmptyTile } from "./EmptyTile";

interface UserDataProps {
  UserData: User;
}

export const SajuTable = ({ UserData }: UserDataProps) => {
  /** 전달된 User의 데이터를 이용해 사주 결과를
   * 반환하는 함수 또는 api 호출부 */
  const getTableData = () => {
    if (!UserData) return []; // user data 정보 없으면 return

    return TABLE_TILES;
  };
  const tableData = getTableData();
  return (
    <div className=" w-full">
      <table className=" box-border">
        <thead>
          <tr className=" border-b-[1px] text-xl">
            <th className="w-20 border-r" />
            {COLUMN_HEADERS.map((header) => (
              <th key={header} className="w-20 border-r  py-4">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ROW_HEADERS.map((row) => {
            const rowData = tableData.find((tile) => tile.id === row.id);
            return (
              <tr key={row.id} className="border-b">
                <th className="text-center px-1">
                  <div className="text-xs">{row.label}</div>
                  <div className="text-[10px] text-gray-600">({row.des})</div>
                </th>
                {COLUMN_HEADERS.map((_, colIndex) => {
                  const content = rowData?.contents?.[colIndex];

                  return (
                    <td
                      key={colIndex}
                      className="border h-12 p-[6px] bg-background"
                    >
                      {content ? (
                        Array.isArray(content) ? (
                          <div className="flex flex-col gap-1 items-center">
                            {content.map((item, i) => (
                              <DataTile
                                key={i}
                                ch={item.ch}
                                des={item.des}
                                sub={item.sub}
                                theme={item.theme}
                              />
                            ))}
                          </div>
                        ) : (
                          <DataTile
                            ch={content.ch}
                            des={content.des}
                            sub={content.sub}
                            theme={content.theme}
                          />
                        )
                      ) : (
                        <EmptyTile />
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
