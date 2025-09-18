import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./App.css";
import NoteProvider from './context/NoteContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <NoteProvider>
      <App />
    </NoteProvider>
  </BrowserRouter>
)
