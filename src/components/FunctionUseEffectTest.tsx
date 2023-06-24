import React, { FunctionComponent, useEffect, useState } from 'react'

const FunctionUseEffectTest: FunctionComponent = () => {

    const [counter, setCounter] = useState<number>(0)
    const [counterTest, setCounterTest] = useState<number>(0)
    const [name , setName] = useState<string>("")

    const incrementCounter = (e : any) => {
        e.preventDefault()
        setCounter(counter+1)
    }

    useEffect(() => {
        console.log("mise a jour du titre");
        
        document.title = "nombre de click : "+ counter
    }, [name, counter])
    return (
        <div className='text-center'>

            <h1 className='text-center'>{counter}</h1>
            <button onClick={incrementCounter} className='btn btn-primary'>Increment</button>
            <button onClick={()=> {
                setCounterTest(counterTest+1)
            }} className='btn btn-success'>Test</button>
            <input type="text" value={name} onChange={(e : any)=> {
                setName(e.target.value)
            }} />
        </div>
    )
}

export default FunctionUseEffectTest