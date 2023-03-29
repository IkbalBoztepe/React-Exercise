import {useState, useEffect} from 'react'
import List from "./List"
import Form from "./Form"

import "./style.css"

function Contacts() {
  const [contacts, setContacts] = useState([ 
    {
    fullname:"Ayşe",
    phone_number:"456456"
    },
    {
      fullname:"Fatma",
      phone_number:"25436",
    } ,
    {
      fullname:"Mahmut",
      phone_number:"258963"
    }
  ])

  useEffect (() => {
    console.log(contacts);
  }, [contacts])

  return (
    <div id='container'>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts
