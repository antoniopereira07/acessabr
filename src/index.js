import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import Header from './components/Header';


// jsx

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main__wrapper'>
    <div className='main__container'>
      <Header/>

    </div>

  </div>
);
