"use client";

import { DataTable } from "@/components/date-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ApiList from "../api-list";
import { SizeColumn, SizeColumns } from "./columns";

interface SizeClientProps {
  data: SizeColumn[]
};

const SizeClient = ({ data }: SizeClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable
        columns={SizeColumns}
        data={data}
        filterKey="name"
      />

      <Heading
        title={"API"}
        description="API Calls for Sizes"
      />
      <Separator />
      <ApiList
        entityName="sizes"
        entityIdName="sizeId"
      />
    </>
  )
}

export default SizeClient