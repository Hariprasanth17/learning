import "./Usereducer.css"
import { useReducer } from "react"



const Usereducer = () => {

    const [state, dispatch] = useReducer(reducer, "Loading...")

    function reducer(state: string, action: object) {
        switch (action.type) {
            case "play":
                return "Playing";
            case "pause":
                return "Paused"

            case "stop":
                return "Stoped"
            case "restart":
                return "Loading..."
        }
    }



    return (
        <div>
            <div className="usereducer-content">

                <div className="Text">
                    <p>Use Reducer</p>
                    <h1>{state}</h1>
                </div>
                <div className="button">
                    <button onClick={() => {
                        dispatch({ type: 'play' })
                    }} >play</button>

                    <button onClick={() => {
                        dispatch({ type: "pause" })
                    }}>Pause</button>

                    <button onClick={() => {
                        dispatch({ type: "stop" })
                    }}>Stop</button>

                    <button onClick={() => {
                        dispatch({ type: "restart" })
                    }} >ReStart</button>
                </div>
            </div >
        </div>
    )
}

export default Usereducer
