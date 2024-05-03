"use client";

import { BillboardColumn, columns } from "@/components/billboards/columns";
import { DataTable } from "@/components/date-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ApiList from "./api-list";

interface BillboardClientProps {
  data: BillboardColumn[]
};

const BillboardClient = ({ data }: BillboardClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data.length})`}
          description="Manage billboards for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable
        columns={columns}
        data={data}
        filterKey="label"
      />

      <Heading
        title={"API"}
        description="API Calls for Billboards"
      />
      <Separator />
      <ApiList
        entityName="billboards"
        entityIdName="billboardId"
      />
    </>
  )
}

export default BillboardClient