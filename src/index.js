import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Curator from './components/Curator';

const CONFIG = {
  state: 'PI',
  city: 'Teresina'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='main__wrapper'>
    <div className='main__container'>
      <Header city={CONFIG.city} state={CONFIG.state} />
      <Home city={CONFIG.city} />
      {/* Espaço para inserir a lista de lugares*/}
      <Curator />
    </div>

  </div>
);
