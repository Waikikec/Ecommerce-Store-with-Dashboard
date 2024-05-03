"use client";

import { DataTable } from "@/components/date-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ApiList from "./api-list";
import { CategoryColumn, CategoryColumns } from "./categories/columns";

interface CategoryClientProps {
  data: CategoryColumn[]
};

const CategoryClient = ({ data }: CategoryClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable
        columns={CategoryColumns}
        data={data}
        filterKey="name"
      />

      <Heading
        title={"API"}
        description="API Calls for Categories"
      />
      <Separator />
      <ApiList
        entityName="categories"
        entityIdName="categoryId"
      />
    </>
  )
}

export default CategoryClient