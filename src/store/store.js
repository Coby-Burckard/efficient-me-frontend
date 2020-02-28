import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'

// combining reducers into a 'root' reducer
const rootReducer = {
  user: userReducer
}

const configure = () => {
  const store = configureStore({reducer: rootReducer})
  return store
}

export default configure