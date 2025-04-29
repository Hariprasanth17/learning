import "./ComponentD.css"
import { useContext } from "react";
import { userContext } from "../CoponentA/ComponentA";

const ComponentD = () => {
    const u5ser = useContext(userContext);

    return (
        <div className="com-d {">
            <h1>Component D</h1>
            <p>{`Thank You ${u5ser}`}</p>
        </div>
    )
}

export default ComponentD
