export const SET_USER_NAME = 'SET_USER_NAME';
 

export const setUserData = (payload) => ({
    type: SET_USER_NAME,
    payload: payload
})

export function setSelectedUserData(userProperties) {
    console.log("User Properties" + JSON.stringify(userProperties));
    return dispatch => {
        dispatch(setUserData(userProperties))
    }
}