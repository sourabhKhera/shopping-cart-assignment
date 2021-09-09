import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import GateKeeper from './components/gatekeeper'
import Header from './components/header'
import Footer from './components/footer'
import store from './store'

import classes from './App.m.scss'

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <header className={classes['app-header']}>
        <Header />
      </header>
      <GateKeeper />
      <footer>
        <Footer />
      </footer>
    </Provider>
  </BrowserRouter>
)
export default App
