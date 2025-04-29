import ComponentTwo from "../ComponentTwo/ComponentTwo"
import "./ComponentOne.css";


const ComponentOne = () => {



    return (
        <div className="com-one">
            <h2>Component 1</h2>
            <p>What is your age</p>
            <ComponentTwo />
        </div>
    )
}

export default ComponentOne
