import { PLAY, PAUSE, STOP } from "./Actiontype";
import { configureStore } from "@reduxjs/toolkit";
interface State {
    value: string
}

const intialState: State = {
    value: "Loading.."
}


const reducerfun: any = (state = intialState, action: { type: string }) => {
    switch (action.type) {
        case PLAY:
            return { ...state, value: "Playing" }
        case PAUSE:
            return { ...state, value: "Paused" }
        case STOP:
            return { ...state, value: "Stoped" }
    }
}

export const store = configureStore(reducerfun);