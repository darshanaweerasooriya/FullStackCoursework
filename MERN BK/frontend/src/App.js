import {useNavigate} from 'react-router-dom';
import './App.css';


function App() {

  const navigate = useNavigate();



  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Green Library</h1>
       
        
        
        <button className= 'books_button' onClick={() => navigate('/Header')}> Navigation bar </button>
        <button className= 'books_button' onClick={() => navigate('/BookAdding')}> Book Add </button>
        <button className= 'books_button' onClick={() => navigate('/BookUpdate')}> Book Edit </button>
        <button className= 'books_button' onClick={() => navigate('/BookDelete')}> Book Delete </button>
        


      </header>
    </div>
  );
}

export default App;
