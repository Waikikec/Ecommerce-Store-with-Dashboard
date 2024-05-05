"use client";

import { ProductType } from "@/types";
import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Currency from "./currency";
import IconButton from "./icon-button";

interface ProductCardProps {
  data: ProductType
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* IMAGES AND ACTIONS */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data.images[0].url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              icon={<Expand size={20} className="text-gray-600" />}
              className=""
              onClick={() => { }}
            />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
              className=""
              onClick={() => { }}
            />
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="">
        <p className="font-semibold text-lg">
          {data.name}
        </p>
        <p className="text-sm text-gray-500">
          {data.category.name}
        </p>
      </div>

      {/* PRICE */}
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  )
}

export default ProductCard