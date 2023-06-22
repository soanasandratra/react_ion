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

    const studentsListItem = students.map(student => {
        return (
            <li key={student.id}>{student.name}</li>
        )
    }
    )

    const ajoutEtudiant = (etudiant : Etudiant) => {
        setStudents(
            [...students, {id : etudiant.id, name : etudiant.name}]
        )
    }

    return (
        <div>
            <h2>Nombre d'etudiants actuelles : {students.length}</h2>

            <ul>
                {studentsListItem}
            </ul>

            <AddStudent add={ ajoutEtudiant } />
        </div>
    )
}

export default Todo