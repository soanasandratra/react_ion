import React, { FunctionComponent, MouseEventHandler, useState} from "react";
import Etudiant from "../models/Etudiant";
import {v1 as uuid} from "uuid"
type Props = {
    add : (etudiant : Etudiant) => void
}

const AddStudent : FunctionComponent<Props>  = ( { add }) => {

    const [newStudent, setNewStudent ] = useState<string>("")

    const sendNewEtudiant = (e : any) => {
        e.preventDefault()
        const id : string = uuid()
        add(new Etudiant(id, newStudent))
    }

    return (
        <>
            <form>
                <input type="text" placeholder="nom d'etudiant" onChange={(e) => {
                    setNewStudent(e.target.value)
                }} /> <br />
                <input type="submit" value="Enregistrer" onClick={sendNewEtudiant}/>
            </form>
        </>
    )
}

export default AddStudent