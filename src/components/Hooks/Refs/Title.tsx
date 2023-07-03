import React, { FunctionComponent, useRef } from 'react'

const Title: FunctionComponent = () => {
    const nbRenders = useRef<number>(0)

    setInterval(()=>{
        nbRenders.current++
        
    },1000)


    return (
        <div>{nbRenders.current}</div>
    )
}

export default Title