import "./ComponentFour.css";
import { useDispatch, UseDispatch, useSelector } from "react-redux";

const ComponentFour = () => {
    const val = useSelector((state) => state.value);
    const dispatch = useDispatch()
    return (
        <div className="com-four">
            <h2>Component 4</h2>
            <h3>{val}</h3>
        </div>
    )
}

export default ComponentFour
