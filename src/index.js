import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todolist from './Todolist';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <> 
    <BrowserRouter>
      <Todolist />
    </BrowserRouter>
    
  </>,
  document.getElementById('root')
);
