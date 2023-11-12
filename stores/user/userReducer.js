import * as userActionTypes from "./userActions"


const initialState = {
    loggedInUserData: {
        name: "",
        gender: ""
    },
}

const userReducer = (state = initialState, action) => {
    console.log("reducer" + JSON.stringify(action.payload?.loggedInUserData?.name));
    switch (action.type) {
        case userActionTypes.SET_USER_NAME:
            return {
                ...state,
                loggedInUserData: {
                    name: action.payload?.loggedInUserData?.name,
                    gender: action.payload?.loggedInUserData?.gender
                }
            }
        default:
            return state
    }
}

export default userReducer;