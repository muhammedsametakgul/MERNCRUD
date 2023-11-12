
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateStudent from './components/CreateStudent';
import Students from './components/Students';
import UpdateStudent from './components/UpdateStudent';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Students />}></Route>
      <Route path='/create' element={<CreateStudent />}></Route>
      <Route path='/edit/:id' element={<UpdateStudent />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
