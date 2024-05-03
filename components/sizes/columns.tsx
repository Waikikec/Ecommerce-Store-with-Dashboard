"use client"

import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./cell-action";

export type SizeColumn = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
}

export const SizeColumns: ColumnDef<SizeColumn>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "createdAt",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellActions data={row.original} />
  },
]
