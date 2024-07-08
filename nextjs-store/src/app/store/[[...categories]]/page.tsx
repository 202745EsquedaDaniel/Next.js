import { ProductsWrapper } from "app/components/Store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
    params: {
      categories: string[],
    }
    searchParams?: string
  }
  
  export default async function Category(props: CategoryProps){
   
    const { categories } = props.params
    let products = []
    const collection = await getCollections()
    console.log(collection)

    if (categories?.length > 0 ) {
      const selectedCollectionId = collection.find((c : any) => c.handle === categories[0])?.id
      products = await getCollectionProducts(selectedCollectionId)
      console.log(products)
    } else {
      products = await getProducts()
    }
  



    return(
      <ProductsWrapper products={products} />
    )
  }