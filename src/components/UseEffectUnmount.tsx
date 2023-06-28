import React, { FunctionComponent, useEffect, useState } from 'react'



const UseEffectUnmount: FunctionComponent = () => {

    const [keyPressed, setKeyPressed] = useState<any>(null)

    const getKeyPressed = (e : any) => {
        setKeyPressed(e.code)        
    }

    document.addEventListener("keyup", getKeyPressed)

    useEffect(()=> {
        return () => {
            console.log("componentDidUnmount");
            
        }
    }, [])
    return (
        <div className='text-center'>
            <h3>{keyPressed}</h3>
        </div>
    )
}

export default UseEffectUnmount