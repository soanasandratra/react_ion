import React, { FunctionComponent,useState} from "react"
import Etudiant from "../models/Etudiant"
import AddStudent from "./AddStudent"
import { listEtudiant } from "../models/data"
const Todo : FunctionComponent = () =>{
    const [students, setStudents] = useState(listEtudiant)
    
    const studentsListItem = students.map(student => {
        return (
            <li key={student.id}>{student.name}</li>
        )
    })

    return(
        <>
            <h2>Nombre d'etudiants actuelles : {students.length}</h2>

            <ul>
                {studentsListItem}
            </ul>

            <AddStudent/>
        </>
    )
}

export default Todo