"use client";

import { DataTable } from "@/components/date-table";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import { OrderColumn, OrderColumns } from "./columns";

interface OrderClientProps {
  data: OrderColumn[]
};

const OrderClient = ({ data }: OrderClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <Heading
        title={`Orders (${data.length})`}
        description="Manage orders for your store"
      />

      <Separator />

      <DataTable
        columns={OrderColumns}
        data={data}
        filterKey="products"
      />
    </>
  )
}

export default OrderClient