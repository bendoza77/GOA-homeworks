// So I import three important functions, one of which is my Contact function, and then using createRoot, 
// which creates a root in the main div that we retrieved from the html file by id, and then we call our Contact 
// function as usual so that all the results that we 
// returned in the Contact function are displayed in the browser.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Contact from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Contact />
  </StrictMode>,
)
