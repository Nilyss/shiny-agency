import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Error from './components/Error'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Trebuchet MS', Helvetica, sans-serif;
  }
  
  body {
    margin: 0
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/survey/:questionNumber" element={<Survey />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/freelance" element={<Freelances />}></Route>
      <Route path={'/*'} element={<Error />}></Route>
    </Routes>
  </BrowserRouter>
)

reportWebVitals()
