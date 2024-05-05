"use client";

import { DataTable } from "@/components/date-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ApiList from "../api-list";
import { ColorColumn, ColorColumns } from "./columns";

interface ColorClientProps {
  data: ColorColumn[]
};

const ColorClient = ({ data }: ColorClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Colors (${data.length})`}
          description="Manage colors for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/colors/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable
        columns={ColorColumns}
        data={data}
        filterKey="name"
      />

      <Heading
        title={"API"}
        description="API Calls for Colors"
      />
      <Separator />
      <ApiList
        entityName="colors"
        entityIdName="colorId"
      />
    </>
  )
}

export default ColorClient