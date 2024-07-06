"use client"
import Image from "next/image"

export default function GlobalError( { reset }: ErrorPageProps) {
    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className=" text-7xl font-black m-0 bg-gradiente-404 bg-clip-text text-transparent">Ha ocurrido un error</h1>
            <Image 
                src="/images/error.png"
                alt="Error"
                width={500}
                height={500}></Image>
                <p className=" text-2xl">Al parecer ha ocurrido un error, pero no te sientas mal</p>
            <button className=" block w-fit font-bold mt-4 py-2 px-4 border-0 rounded-lg bg-gradiente-404 text-xl cursor-pointer text-white" onClick={reset}>Intentar de nuevo</button>
        </main>
    )
}