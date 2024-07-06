"use client"

import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps){

    useEffect(()=> {
        console.error(error)
    }, [])

    return (
        <div>
            <h1>:c</h1>
            <p>Ah ocurrido un error</p>
            <button onClick={reset}>Intentar de nuevo</button>
        </div>
    )
}