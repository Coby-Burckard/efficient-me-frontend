import { createReducer } from '@reduxjs/toolkit'

const defaultState = {
  count: 0
}

const counterReducer = createReducer(defaultState, {
  INCREMENT: (state) => {
    state.count += 1
  },
  SET: (state, action) => {
    state.count = action.amount * 1
  }
})

export { counterReducer as default }