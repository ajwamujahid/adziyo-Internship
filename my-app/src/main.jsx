import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

// import Practice from './Index.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Index />
//   </StrictMode>,
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
