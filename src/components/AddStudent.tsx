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
        setNewStudent("")
    }

    return (
        <div className="mt-5">
            <form>
                <input type="text" placeholder="nom d'etudiant" className="form-control" value={newStudent} onChange={(e) => {
                    setNewStudent(e.target.value)
                }} /> <br />
                <input type="submit" className="btn btn-success" value="Enregistrer" onClick={sendNewEtudiant}/>
            </form>
        </div>
    )
}

export default AddStudent