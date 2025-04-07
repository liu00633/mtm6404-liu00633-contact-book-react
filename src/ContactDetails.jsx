import { useEffect, useState } from 'react'
import email from "./assets/email.png"
import update from "./assets/update.png"
import del from "./assets/del.png"
import { Link, useParams } from 'react-router-dom';
import { getContactById ,deleteContact} from "./db"
import {  useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate(); 

  const handleGoBack = () => {
    navigate(-1); 
  };

  const [current, setCurrent] = useState()
  const { id } = useParams();

  useEffect(() => {
    getContactById(id).then((data) => {
      setCurrent(data)
    })
  }, [id])

  const handleDel = async () => {

    const result = confirm("Confirm deletion?");
    if (result) {
      await deleteContact(id);
      alert("The contact is deleted successfully, back to the previous page now")
      handleGoBack()
    }

  }

  return (
    <>
      {current && <div className="ContactDetails" >
        <div>
          <div className='contacts-item' >
            <div className='avatar'>
              {current?.firstName.charAt(0).toUpperCase()}
            </div>
            <div className='info'>
              <div>{current?.firstName} {current?.lastName}</div>
            </div>
            <div className='option'><Link to={`/editContact/${current.id}`} ><img src={update} /> </Link> <img src={del} onClick={handleDel} style={{marginLeft:'20px'}} /></div>
          </div>
        </div>
        <div className='details'>
          Contact details
          <div><img src={email} />Email: {current?.email} </div>
          
        </div>
      </div>}
    </>

  )
}

export default App
