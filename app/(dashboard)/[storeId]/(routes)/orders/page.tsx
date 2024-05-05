import { OrderColumn } from "@/components/orders/columns";
import OrderClient from "@/components/orders/order-client";
import prismadb from "@/lib/prismaDb";
import { priceFormatter } from "@/lib/utils";
import { format } from "date-fns";

const OrdersPage = async (
  { params }:
    { params: { storeId: string } }
) => {

  const orders = await prismadb.order.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      orderItems: {
        include: {
          product: true
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  const formattedOrders: OrderColumn[] =
    orders.map((item) => ({
      id: item.id,
      phone: item.phone,
      address: item.address,
      isPaid: item.isPaid,
      products: item.orderItems.map((orderItem) => orderItem.product.name).join(", "),
      totalPrice: priceFormatter.format(item.orderItems.reduce((total, item) => {
        return total + Number(item.product.price)
      }, 0)),
      createdAt: format(item.createdAt, "MMMM do, yyyy"),
    }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <OrderClient data={formattedOrders} />
      </div>
    </div>
  )
}

export default OrdersPage