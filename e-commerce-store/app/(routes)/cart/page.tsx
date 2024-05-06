"use client";

import Summary from "@/app/components/summary";
import CartItem from "@/app/components/ui/cart-item";
import Container from "@/app/components/ui/container";
import useCartHook from "@/hooks/useCartHook";

const CartPage = () => {
  const cart = useCartHook();

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {
                cart.items.length === 0 &&
                <p className="text-neutral-500">No items added to cart</p>
              }
              <ul>
                {cart.items.map(item => (
                  <CartItem
                    key={item.id}
                    data={item}
                  />
                ))}
              </ul>

            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CartPage