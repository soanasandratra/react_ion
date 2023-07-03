import React, { useEffect, useRef, useState } from 'react'

const Input = () => {

    const [count, setCount] = useState<number>(0)

    const setIntervalRef = useRef<any>(null)
    useEffect(()=> {
        setIntervalRef.current = setInterval(()=>{
            setCount(count => count+1)
        }, 1000) 
    }, [])

    const arrete = ()=> {
        clearInterval(setIntervalRef.current)
    } 
    return (
        <div className='input-group'>
            <h1>{count}</h1>
            <button onClick={arrete} className='input-group-text btn btn-primary'>Arreter</button>
        </div>
    )
}


export default Input