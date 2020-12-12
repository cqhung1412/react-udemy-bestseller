import * as actionTypes from './actionTypes'

export const storeResult = (result) => {
  return (dispatch, getState) => {
    const oldCounter = getState().ctr.counter
    console.log(oldCounter)
    setTimeout(() => {
      dispatch({
        type: actionTypes.STORE_RESULT,
        result
      })
    }, 2000)
  }
}

export const deleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    id
  }
}