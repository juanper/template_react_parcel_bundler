import React from 'react'
import { render } from 'react-dom'
import './index.css'
import logo from './index.jpeg'

const App = () => <div>
  <h1>Parcel Bundler with React</h1>
  <img src={logo}></img>
  </div>

render(
  <App/>,
  document.getElementById('root')
)