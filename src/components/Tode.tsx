import React, { FunctionComponent, useState } from "react"
import Etudiant from "../models/Etudiant"
import AddStudent from "./AddStudent"
const Todo: FunctionComponent = () => {
    const [students, setStudents] = useState(
        [
            {
                id: "1",
                name: "Rakoto",
            },
            {
                id: "2",
                name: "Randria",
            },
            {
                id: "3",
                name: "Fanantenana",
            },
        ]
    )

    const [warning, setWarning] = useState<boolean>(false)

    const studentsListItem = students.map(student => {
        return (
            <li className="list-group-item" key={student.id}>{student.name}</li>
        )
    }
    )

    const ajoutEtudiant = (etudiant : Etudiant) => {
        if(etudiant.name.trim() != "")
        {   
            warning && setWarning(false)
            setStudents(
                [...students, {id : etudiant.id, name : etudiant.name}]
            )
        } else{
            setWarning(true)
        }
    }

                
    const warningMessage = warning ? <div className="alert alert-danger">Veuillez entrer une valeur valide</div> : <div></div>
    
    return (
        <div className="col-6">
            {warningMessage}
            <h2>Nombre d'etudiants actuelles : {students.length}</h2>

            <ul className="list-group">
                {studentsListItem}
            </ul>

            <AddStudent add={ ajoutEtudiant } />
        </div>
    )
}

export default Todo