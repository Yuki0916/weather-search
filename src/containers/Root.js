import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Main from './Main'

const store = configureStore()

function Root() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default Root
