import '../../../Style/Dashboard/Content/date.css'
import { useState } from 'react';

export default function Date({ task }) {
  let [ dateVal, setDateVal ] = useState({
    date: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDateVal((prev) => (
      { ...prev, [name]: value }
    ))
  }

  return (
    <div className='date'>
      <h1>
        <img
          width="55"
          height="55"
          src="https://img.icons8.com/arcade/64/google-calendar.png"
          alt="calendar--v1"
        />
      </h1>
      <p>{dateVal.date}</p>
      <input type='date' name='date' onChange={handleChange} />
    </div>
  );
}
