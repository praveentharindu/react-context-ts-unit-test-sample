import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './containers/common/header/Header';
import Main from './containers/common/main/Main';

import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
