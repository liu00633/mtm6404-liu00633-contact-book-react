import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Col from "../components/Col";
import Row from "../components/Row";
import {doc, getDoc} from 'firebase/firestore'
import db from '../db'

function Contact () {
  const params = useParams()
  const [contact, setNote] = useState({
    Firstname: '',
    Lastname: '',
    Email:''
  })

  useEffect(() => { 
    getDoc(doc(db, 'contacts', params.id))
    .then( document => {
        setNote({
        Firstname: document.data().Firstname,
        Lastname: document.data().Lastname
        })
    })
   }, [])

  function changeHandler (e) {

  }

  function submitHandler (e) {
    e.preventDefault()
  }

  function clickHandler () {

  }

  return (
    <Row>
      <Col>
        <form class="p-5 bg-light border border-1 mb-3"
          onSubmit={submitHandler}>
          <h2 class="mb-3">Edit Contact: {params.id}</h2>
          <div class="mb-3">
            <label class="form-label">First name</label>
            <input name="First name" type="text" class="form-control"
              value={contact.Firstname} onChange={changeHandler}  />
          </div>
          <div class="mb-3">
            <label class="form-label">Last name</label>
            <textarea name="text" class="form-control"
              value={contact.Lastname} onChange={changeHandler}></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <textarea name="text" class="form-control"
              value={contact.Email} onChange={changeHandler}></textarea>
          </div>
          <div class="d-flex justify-content-end">
            <Link class="btn btn-secondary me-3" to="/">Cancel</Link>
            <button type="submit" class="btn btn-primary">Save</button>
          </div>
        </form>

        <button type="button" class="btn btn-danger"
          onClick={clickHandler}>Delete</button>
      </Col>
    </Row>
  )
}

export default Contact