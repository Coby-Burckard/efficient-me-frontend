import { createReducer } from '@reduxjs/toolkit'

const defaultState = {
  user: ''
}

const userReducer = createReducer(defaultState, {
  LOGIN: (state, action) => {
    state.user = action.token
  },
  LOGOUT: (state) => {
    state.user = ''
  }
})

export { userReducer as default }