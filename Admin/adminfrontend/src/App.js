
import './App.css';
import Addlibrarian from './pages/addlibrarian';
import Addstaff from './pages/addstaff';
import { BrowserRouter as Router, Routes,Route, BrowserRouter } from 'react-router-dom';
import Adminlog from './pages/login';
import Userbooks from './pages/books';
import Orderbooks from './librarian/orderbooks';
import Addbooks from './librarian/addbooks';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Adminlog/>}/>
        <Route  path="addlib" element={<Addlibrarian/>}/>
        <Route  path="addst" element={<Addstaff/>}/>
        <Route  path="books" element={<Userbooks/>}/>
        <Route  path="obooks" element={<Orderbooks/>}/>
        <Route  path="addbook" element={<Addbooks/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
