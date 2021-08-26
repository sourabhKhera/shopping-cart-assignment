import React, { Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import GateKeeper from './components/gatekeeper'
import Header from './components/header'
import Footer from './components/footer'

const App = () => (
  <BrowserRouter>
    <header>
      <Header />
    </header>
    <GateKeeper />
    <footer>
      <Footer />
    </footer>
  </BrowserRouter>
)
export default App
