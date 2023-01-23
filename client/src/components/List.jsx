
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function List(props) {  
  const [student, setStudent] = useState(null);
  console.log(student)
  
  useEffect(() => {
    axios.get(`http://localhost:3001/api/student/`, {headers : {
      'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
  }})
    .then((res) => {
      setStudent(res.data);      
    });
  }, []);
  

  if(!student) return;

  
  return (
    <div className='container'>   
      <h1 className='title'>listado de alumnos</h1> 
        
       <div>
       {student?.map((alumno, i) => (
            <div key={i} className='list'> 
            <ul>              
              <li><a href={`${alumno.id}`} >{alumno.name}</a></li>
            </ul>              
            </div>)
            )}                   
        </div>    
        <Link to={'/creation'}> Add alumni</Link>
    </div>
  );
}

export default List;

  