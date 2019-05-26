import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './assets/styles/colors.css'
import './assets/styles/reset.css'
import './assets/styles/App.css'
import './assets/styles/responsive.css'

render(<App />, window.document.querySelector('#root'))
