import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Route , Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookUpdate from './BookUpdate';

import Header from './Header';
import BookAdding from './BookAdding';
import BookDelete from './BookDelete';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path='/' element={<App />} />

<Route path='/Header' element={<Header />} />
<Route path='/BookUpdate' element={<BookUpdate />} />

<Route path='/BookDelete' element={<BookDelete />} />
<Route path='/BookAdding' element={<BookAdding />} />




</Routes>
</BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
