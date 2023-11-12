export const SET_TRAINERS = 'SET_TRAINERS'

export const setTrainersSuccess = (trainers) => ({
    type: SET_TRAINERS,
    payload: { trainers }
})

export function setTrainers(trainers) {
    return dispatch => {
        dispatch(setTrainersSuccess(trainers))
    }
}