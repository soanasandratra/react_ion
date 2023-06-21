import React, {FunctionComponent, useState} from "react";
import Etudiant from "../models/Etudiant";

const AddStudent : FunctionComponent = () => {

    const [newStudent, setNewStudent ] = useState<Etudiant>()

    const addNewStudent = () => {
        // e.preventDefault()
        let name = document.querySelector('input[type="text"]')
        let id = document.querySelector('input[type="number"]')

        console.log(name);
        

    }

    return (
        <>
            <form onSubmit={addNewStudent}>
                <input type="number" placeholder="identifiant" /> <br />
                <input type="text" placeholder="nom d'etudiant" /> <br />
                <input type="submit" value="Enregistrer" />
            </form>
        </>
    )
}

export default AddStudent