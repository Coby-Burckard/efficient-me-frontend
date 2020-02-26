import { configureStore } from '@reduxjs/toolkit'
import counter from '../reducers/counter'

// combining reducers into a 'root' reducer
const rootReducer = {
  counter: counter
}

const configure = () => {
  const store = configureStore({reducer: rootReducer})
  return store
}

export default configure