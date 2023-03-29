import {useState} from 'react'

function List({ contacts } ) {
  const [filterText, setFilterText] = useState("")

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    )
  }
  
  )

  console.log("filtered" ,filtered );
  return (
    <div>

      <input placeholder='Filter Contact' value={filterText} onChange={(e) => setFilterText(e.target.value)} className="filter"/>

      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>Name: {contact.fullname} / Phone: {contact.phone_number}</li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </div>
  )
}

export default List
