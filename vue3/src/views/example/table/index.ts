import { NTag } from "naive-ui";

/*
 * @Editors: Nie Chengyong
 * @Date: 2023-03-14 15:29:48
 * @LastEditTime: 2023-03-14 15:31:33
 * @Description:
 */
export const columns = [
  {
    title: "id",
    key: "id",
  },
  {
    title: "角色名称",
    key: "name",
    render: (row) => {
      return h(
        NTag,
        {
          type: "success",
        },
        {
          default: () => row.name,
        }
      );
    },
  },
];

export const data = {
  pageSize: 10,
  pageCount: 1,
  list: [
    {
      id: "63feeff3569f0473b0f6dcd9",
      name: "管理员",
      code: ["table", "from", "three", "webgl", "example"],
      permissions: ["table - add", "table - select", "table - delete "],
    },
    {
      id: "6400a2070a9e5e46991f1c63",
      name: "测试",
      code: ["example", "table", "from"],
      permissions: ["delete "],
    },
  ],
};
