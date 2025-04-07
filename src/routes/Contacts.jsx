import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import {collection, query, onSnapshot, orderBy} from 'firebase/firestore'
import db from '../db'


function Contacts () {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const c = collection(db, 'contacts')
    const q = query(c, orderBy('Firstname'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      //create a temporary array
      const data = []
      //push each lelement to the array
      snapshot.forEach((doc) => data.push({
        id: doc.id,
        Firstname: doc.data().Firstname,
        Lastname: doc.data().lastname
      }) )
      setContacts(data)
})

   }, [])

  return (
    <Row>
      { contacts.map( (contact) => (
              <Col key={contact.id} className="col-12 col-md-6 col-lg-4 mb-3">
                  <Link className="text-decoration-none text-body" to={"/note/" + note.id}>
                  <Card Firstname={contact.Firstname} text={contact.Lastname} />
                  </Link>
              </Col>
          )
      )}
    </Row>
  )
}

export default Contacts