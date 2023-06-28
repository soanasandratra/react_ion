import React, { FunctionComponent, useContext } from 'react'
import { UserContext } from './Contexts/MyContexts'
const ContentData: FunctionComponent = () => {

    const user : any = useContext(UserContext)
    return (
        <>
            <ul>
                <li>Nom : {user.nom}</li>
                <li>Age : {user.age} ans</li>
            </ul>
        </>
    )
}

export default ContentData