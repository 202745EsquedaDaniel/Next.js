import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return(
        <main className='flex flex-col items-center justify-center'>
            <h1 className=' text-[10rem] font-black m-0 bg-gradiente-404 bg-clip-text text-transparent'>404</h1>
            <Image 
                src="/images/404.png" 
                alt='404'
                width={300}
                height={300}
                ></Image>
            <h2 className=' text-3xl m-0'>Uy, parece que este enlace se escondio!</h2>
            <p className=' text-2xl'> Pero nuestra tienda esta abierta las 24/7</p>
            <Link href="/store" className=' block w-fit font-bold mt-4 py-2 px-4 border-0 rounded-lg bg-gradiente-404 text-xl cursor-pointer text-white'> Vamos de Compras!</Link>
        </main>
    )
}