import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row list-none space-x-10 m-0 p-8 justify-center">
          <li className="text-xl font-normal">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="text-xl font-normal">
            <Link href="/store">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
