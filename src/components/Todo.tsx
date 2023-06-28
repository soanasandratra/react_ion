import React, { FunctionComponent, useEffect, useState } from "react"
import Etudiant from "../models/Etudiant"
import AddStudent from "./AddStudent"
const Todo: FunctionComponent = () => {
    const [students, setStudents] = useState<any[]>([])

    useEffect(() => {
        setStudents([
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
        ])
    }, [])

    const [warning, setWarning] = useState<boolean>(false)

    const setBg = (e: any) => {
        e.target.classList.add("bg-info")
        // console.log("mouse over");
    }
    const removeBg = (e: any) => {
        e.target.classList.remove("bg-info")
        // console.log("mouse over");
    }

    // const deleteThis = (e) => {
    //     e.target.parentElement.remove()
    // }



    const ajoutEtudiant = (etudiant: Etudiant) => {
        if (etudiant.name.trim() != "") {
            warning && setWarning(false)
            setStudents(
                [...students, { id: etudiant.id, name: etudiant.name }]
            )
        } else {
            setWarning(true)
        }
    }


    const warningMessage = warning ? <div className="alert alert-danger">Veuillez entrer une valeur valide</div> : <div></div>

    return (
        <div className="col-6">
            {warningMessage}
            <h2>Nombre d'etudiants actuelles : {students.length}</h2>

            <ul className="list-group">
            
            </ul>

            <AddStudent add={ajoutEtudiant} />
        </div>
    )
}

export default Todo