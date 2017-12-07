import * as types from '../constants/types'

// action creaters
export const initSession = () => ({
  type: types.INITIALIZE_SESSION,
});

export const updateStatus = new_status => ({
  type: types.UPDATE_STATUS,
  new_status,
})

export const finishSession = () => ({
  type: types.FINISH_SESSION,
})
