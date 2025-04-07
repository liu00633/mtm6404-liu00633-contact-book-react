import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getContacts, getContactById } from "./db"
import update from "./assets/update.png"
import del from "./assets/del.png"

function App() {


  function sortByFirstLetter(arr) {
    return arr.sort((a, b) => {
      let firstLetterA = a.firstName.charAt(0).toUpperCase();
      let firstLetterB = b.firstName.charAt(0).toUpperCase();

      if (firstLetterA < firstLetterB) {
        return -1;
      } else if (firstLetterA > firstLetterB) {
        return 1;
      }
      return 0;
    });
  }


  let [allList, setAllList] = useState([]);

  const [currentContacts, setCurrentContacts] = useState([]);

  useEffect(() => {
    getContacts().then(list => {


      setAllList(sortByFirstLetter([...list]))

      setCurrentContacts(sortByFirstLetter([...list]));
    })

  }, []);

  const handleChange = (e) => {

    const value = e.target.value.toLowerCase();

    if (value) {

      const list = allList.filter(i => i.firstName.toLowerCase().includes(value) || i.lastName.toLowerCase().includes(value))

      setCurrentContacts([...list]);
      return;
    }

    setCurrentContacts([...allList])
  }

  return (
    <div className="App">
      <div className='search'><input type="text" onChange={handleChange} placeholder='Search for a contact' /></div>
      <div className='add'>  <Link to="/add">+ Create a contact </Link></div>
      <div>
        {currentContacts.map((i, index) => {
          return <Link to={`/contactDetails/${i.id}`} key={index}>
            <div className='contacts-item' >

              <div className='avatar'>
                {i.firstName.charAt(0).toUpperCase()}
              </div>
              <div className='info'>
                <div>{i.firstName} {i.lastName}</div>
                <div>{i.email}</div>
              </div>
              {/* <div className='option'><img src={update} /><img src={del} /></div> */}
            </div>
          </Link>
        })}
        {currentContacts.length <= 0 && <div>No contacts found</div>}
      </div>
    </div>
  )
}

export default App
