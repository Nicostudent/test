import '../App.css';
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


export default function Detail() {
    const [student, setStudent] = useState(null);
   const {id} = useParams()
    useEffect(() => {
      axios.get(`http://localhost:3001/api/student/${id}`, {headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }})
      .then((res) => {
        setStudent(res.data);      
      });
    }, []);
  if(!student) return;    
  return (
    <div  className='cont'>   
          <Link className='Link' to={'/'}>Back</Link>    
      <div className='detailContainer'>
          <div className='nav'>
            <p>Alumno</p>
            <p>Materia</p>
            <p>Estado</p>
            <p>Profesor</p>
          </div>
        <div className='detail'>
            <div className='alumni' >             
                <p>{student.name}</p>
                <p>{student.lastName}</p>              
            </div>
            <div className='subjects'>           
              {student.signatures.length && student.signatures.map(c => (
                <div className={`${'eachSubject'} ${(c.signatureScore === 'fail') ? 'fail' : 'passed' } `} > 
                  <p> {c.signatureName}</p>
                  <p className={c.signatureScore === 'fail' ? 'fail' : ''}> {c.signatureScore }</p>
                  <p> {c.professor}</p>
                </div>
              ))}
            </div>
        </div>
        
      </div>
    </div>
  )
}

