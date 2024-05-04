"use client";

import { DataTable } from "@/components/date-table";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import ApiList from "../api-list";
import { ProductColumn, ProductColumns } from "./columns";

interface ProductClientProps {
  data: ProductColumn[]
};

const ProductClient = ({ data }: ProductClientProps) => {

  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data.length})`}
          description="Manage products for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <Separator />

      <DataTable
        columns={ProductColumns}
        data={data}
        filterKey="label"
      />

      <Heading
        title={"API"}
        description="API Calls for products"
      />
      <Separator />
      <ApiList
        entityName="products"
        entityIdName="productId"
      />
    </>
  )
}

export default ProductClient