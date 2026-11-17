import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UseRef from './UseRef.jsx'
// import UseRef from './UseRef.jsx'
// import UseEffect from './UseEffect.jsx'
// import UseState from './UseState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseState /> */}
    {/* <UseEffect/> */}
    {/* <UseRef/> */}
    <UseRef/>

  </StrictMode>,
)
