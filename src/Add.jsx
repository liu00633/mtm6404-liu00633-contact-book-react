import { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import { addContact } from "./db"

function EditContactForm() {
  const navigate = useNavigate(); 


  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "" })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName) {
      alert("Please Enter firstName");
      return
    }
    if (!formData.lastName) {
      alert("Please Enter lastName");
      return

    }
    if (!formData.email) {
      alert("Please Enter email");
      return

    }

  
   const id= await addContact(formData)
    alert("The contact was added successfully")
    navigate(`/contactDetails/${id}`,{replace:true}); 
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <div>
        <label>FirstName:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Enter firstName"
        />
      </div>
      <div>
        <label>LastName:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Enter lastName"
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />
      </div>
      <button className='submit' type="submit">Save</button>
    </form>
  );
}

export default EditContactForm;