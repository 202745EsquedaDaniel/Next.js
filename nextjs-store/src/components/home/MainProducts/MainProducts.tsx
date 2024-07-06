import { getProducts } from "app/services/shopify"
import Image from "next/image"


export const MainProducts = async () => {
    const response = await fetch("http://localhost:3000/api")
    const { products } = await response.json()
    

    return (
        <section className="">
          <h3 className=" text-center text-5xl">✨ New products released!</h3>
          <div className="grid w-full grid-cols-2 grid-rows-[400px_400px]">
          {products?.map((product) => {
          const imageSrc = product.images[0].src;
              return (
                <article key={product.id} className=" relative z-[1] min-h-[400 px]">
                  <p className=" absolute top-0 right-6 z-[2] text-2xl font-bold max-w-72 text-right">{product.title}</p>
                  <Image className=" h-[400px] opacity-40 object-cover" src={imageSrc} fill alt={product.title} loading="eager" />
                </article>
              )
            })}
          </div>
        </section>
      )
    }