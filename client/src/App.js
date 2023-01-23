import List from './components/List';
import Detail from './components/Detail';
import Form from './components/Form';
import {Routes, Route} from 'react-router-dom';


function App() {  

  return (
    <div className='container'> 
      <Routes>
        <Route exact path={'/'} element={<List/>}/>
        <Route path={'/:id'} element={<Detail/>}/> 
        <Route path={'/creation'} element={<Form/>}/> 

      </Routes>
    </div>
  );
}

export default App;
