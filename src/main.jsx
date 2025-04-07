import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Add from './Add'
import ContactDetails from './ContactDetails'
import EditContact from './EditContact'
import "./db"

import './index.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/add" element={<Add />} />
        <Route path="/contactDetails/:id" element={<ContactDetails />} />
        <Route path="/editContact/:id" element={<EditContact />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
)
