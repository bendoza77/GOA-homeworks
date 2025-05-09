import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// Here I import all the necessary libraries. One of them is react-dom/client from which we import the createRoot 
// function and this function is used to create the root and without this function it cannot output any information to the site.
// Then we import our App function where the information that we need to output is written and then we normally call it to 
// display all the information that is stored in this function on the site.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
