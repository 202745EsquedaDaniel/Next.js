import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()

  return (
    <main className="flex flex-col px-16 mx-auto">
      <h1 className=" font-bold mb-4 text-3xl">Explore</h1>
      <nav>
        <ul className="p-0 m-0 flex flex-row flex-wrap gap-x-4 mb-8">
          {
            collections.map((collection: any) => (
              <Link 
                key={collection.id} 
                href={'/store/' + collection.handle}
                className=" bg-gradiente-404 rounded-[3rem] py-2 px-4 text-white font-bold"
                >
                {collection.title}
              </Link>
            ))
          }
        </ul>

      </nav>
      {children}
    </main>
  )

}