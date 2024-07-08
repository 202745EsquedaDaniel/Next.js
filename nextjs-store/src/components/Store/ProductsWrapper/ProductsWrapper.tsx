import { ProductCard } from "../ProductCard";

interface ProductsWrapperProps {
    products: ProductType[]
}

export const ProductsWrapper = ({ products }: ProductsWrapperProps) => {
    return (
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] gap-x-12 gap-y-8 items-center justify-center mt-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>
    )
  }