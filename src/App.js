import './App.css';
import {Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Results from './Pages/Results/Results';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/results' element={<Results/>}/>


      <Route path='/contact' element={<Contact/>}/>

      <Route path='*' element={<NotFound/>}/>


        
      </Routes>
      



    </div>
  );
}

export default App;
