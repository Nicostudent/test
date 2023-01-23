import axios from 'axios'
import { useState } from 'react';

export default function FormStudent() {  
  const [student, setstudent] = useState({
    name: "",
    lastName : "",
    signature: "",
    score: "",
    professor: "",
  });
  

  const handleSubmint = async() =>{
    try{
      const response = await axios({
        method: "post",
        url: "http://localhost:3001/api/student",
        data: student,
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    catch(error){
      console.log(error)
    }
  }

  const handleChange = (e) =>{
    setstudent({
      ...student,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className='container'>      
      Add alumni
      <form onSubmit={handleSubmint} className='form'>
        <label> Nombre 
          <input type='text' name='name' placeholder='Nicolás' value={student.name} onChange={handleChange} />
        </label>
        <label> Apellido
          <input type='text' name='lastName' placeholder='Apellido' value={student.lastName} onChange={handleChange} />
        </label>
        <label> Materia
          <input type='text' name='signature' placeholder='fisica' value={student.signature} onChange={handleChange} />
        </label>
        <label> Nota
          <input type='number'  name='score'  value={student.score} onChange={handleChange}/>
        </label>
        <label> Profesor
          <input type='text' name='professor' value={student.professor}  onChange={handleChange}/>
        </label>
        <input type='submit' value='enviar' />
      </form>   
    </div>
  );
}

