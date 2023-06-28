import React, { FunctionComponent, useState } from "react"
import ProfileData from "./components/Hooks/ProfileData";
import { UserContext } from "./components/Hooks/Contexts/MyContexts";

const App: FunctionComponent = () => {
  const [user, setUser] = useState({
    nom: "Nasandratra",
    age: 19
  })
  return (
    <UserContext.Provider value={user}>
      <div className="container">
        <ProfileData />
      </div>
    </UserContext.Provider>
  )
}

export default App;
