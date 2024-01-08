
import './App.css';
import PersonalDetails from './Pages/PersonalDetails';
import Signin from './Pages/Signin';
import Addbooks from './Pages/addbooks';
import Contactus from './Pages/contactus';
import Feedback from './Pages/feedback';
import Home from './Pages/home';
import Userbooks from './Pages/userbooks';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="/pd" element={<PersonalDetails/>}/>
          <Route path='addimage' element={<Addbooks/>}/>
          <Route path="books" element={<Userbooks/>}/>
          <Route path="addbooks" element={<Addbooks/>}/>
          <Route path="about" element={<Contactus/>}/>
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
