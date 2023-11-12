import * as trainersActionTypes from "./trainersActions";

const initialState = {
    trainers: ""
}

const trainersReducer = (state = initialState, action) => {
    switch (action.type) {
        case trainersActionTypes.SET_TRAINERS:
            return {
                ...state,
                trainers: action.payload.trainers
            }
        default:
            return state
    }
}

export default trainersReducer;