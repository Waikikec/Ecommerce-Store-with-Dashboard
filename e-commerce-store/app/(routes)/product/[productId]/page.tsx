import getProduct from "@/app/actions/get-product";
import getProducts from "@/app/actions/get-products";
import Gallery from "@/app/components/gallery/gallery";
import Info from "@/app/components/info";
import ProductList from "@/app/components/product-list";
import Container from "@/app/components/ui/container";

interface ProductPageProps {
  params: {
    productId: string;
  }
}
const ProductPage = async ({ params }: ProductPageProps) => {

  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">

            {/* GALERY */}
            <Gallery images={product.images} />

            {/* INFO */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>

          {/* RELATED ITEMS */}
          <hr className="my-10" />
          <ProductList
            title="Related Items"
            items={suggestedProducts}
          />

        </div>
      </Container>
    </div>
  )
}

export default ProductPage