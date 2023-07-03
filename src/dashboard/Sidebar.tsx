import React, { FunctionComponent } from 'react'

const Sidebar : FunctionComponent = () => {
  return (
    <div className='bg-info sidebar'>
        <ul className="nav justify-content-center">
            <li className="nav-item"><a className='nav-link' href="/">dashboard</a></li>
            <li className="nav-item"><a className='nav-link' href="/etudiants">etudiants</a></li>
            <li className="nav-item"><a className='nav-link' href="/enseignants">enseignants</a></li>
        </ul>
    </div>
  )
}

export default Sidebar