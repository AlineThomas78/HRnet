import * as React from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { makeData } from "./makeData";

const columns = [
  {
    accessorKey: "firstName",
    cell: (info) => info.getValue(),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: "lastName",
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  },

  {
    accessorKey: "age",
    header: () => "Age",
    footer: (props) => props.column.id,
  },

  {
    accessorKey: "visits",
    header: () => <span>Visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "status",
    header: "Status",
    footer: (props) => props.column.id,
  },
  {
    accessorKey: "progress",
    header: "Profile Progress",
    footer: (props) => props.column.id,
  },
];

function EmployeeList() {
  const [data, setData] = React.useState(makeData(55));
  const rerender = () => setData(makeData(55));

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    rowCount: 55,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
  });

  return (
    <DataTable stripedRows value={makeData(55)} paginator rows={10} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
    <Column field="firstName" header="firstName" style={{ width: '25%' }}></Column>
    <Column field="lastName" header="lastName" style={{ width: '25%' }}></Column>
    <Column field="age" header="age" style={{ width: '25%' }}></Column>
    <Column field="visits" header="visits" style={{ width: '25%' }}></Column>
</DataTable>
  );
}
export default EmployeeList;
