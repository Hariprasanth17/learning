import ComponentB from "../ComponentB/ComponentB"
import "./ComponentA.css"
import { createContext, useState } from "react"
export const userContext = createContext("");

const ComponentA = () => {
    const [user, setUser] = useState("Ram");


    return (
        <div className="com-a">

        <h4 >UseContext</h4>
            <h1>Component A</h1>
            <h6>{`Hi ${user}`}</h6>
            <userContext.Provider value={user}>
                <ComponentB />
            </userContext.Provider>

        </div>
    )
}

export default ComponentA
