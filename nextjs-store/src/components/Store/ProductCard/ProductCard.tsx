import Image from "next/image"
import Link from "next/link"

interface ProductCardInterface {
    product: ProductType
}

export const ProductCard = ({ product }: ProductCardInterface) => {
    return (
        <Link 
            href={`/articulo/${product.handle}?id=${product.id}`}
            className=""
            >
                <article className="flex flex-col relative">
                    <Image
                    src={product.image}
                    alt={product.title}
                    quality={80}
                    height={320}
                    width={320}
                    loading="eager"
                    />
                    <div className=" p-3 pt-0 rounded-md">
                        <h3>{product.title}</h3>
                    </div>
                    <span className=" w-fit bg-red-700 text-white inline-block p-1 absolute -top-2 -right-1 rounded-md rotate-[5deg]">${product.price} USD</span>
                </article>
        </Link>
    )
}