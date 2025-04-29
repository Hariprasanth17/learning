import { useState } from "react";
import "./Usestate.css";

const Usestae = () => {
    const [text, setText] = useState("Loading...")

    return (
        <div className="usestate-content">
            <div className="Text">
                <p>Use State</p>
                <h1>{text}</h1>
            </div>
            <div className="button">
                <button onClick={() => { setText("Playing...") }}>play</button>

                <button onClick={() => { setText("Paused") }}>Pause</button>

                <button onClick={() => { setText("Stoped !") }} >Stop</button>

                <button onClick={() => { setText("Loading...") }}>ReStart</button>
            </div>
        </div >
    )
}

export default Usestae
