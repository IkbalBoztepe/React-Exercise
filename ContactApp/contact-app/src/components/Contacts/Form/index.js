import {useState} from 'react'

const initialFormValues = { fullname:"", phone_number:""}

function Form({ addContacts, contacts}) {
  const [form, setForm] = useState(initialFormValues)

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})

  };

  const onSubmit = (e) => {
    e.preventDefault();
    

    if (form.fullname === "" || form.phone_number === "") {
      return false
    }


    addContacts([...contacts, form])
    setForm(initialFormValues)

    console.log(form)
  }

  
  
  return (
    <form onSubmit={onSubmit} className="contform">
      <div>
        <input 
        name='fullname' onChange={onChangeInput} value={form.fullname} required/>
        <span>Full Name</span>
      </div>
      <div>
        <input  
        name='phone_number'onChange={onChangeInput} value={form.phone_number} required/>
        <span>Phone Number</span>
      </div>
      <div className='btn'>
        <button >Add</button>
      </div>
    </form>
  )
}

export default Form
