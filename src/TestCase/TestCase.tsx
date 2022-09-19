import { render } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../ReduxCrud/redux/Store'

const ComponentProvider = (e:React.ReactElement) => {
  render(
    <>
    <Provider store={store}>
        <BrowserRouter>{e}</BrowserRouter>

    </Provider>
    </>
  )
}

export default ComponentProvider