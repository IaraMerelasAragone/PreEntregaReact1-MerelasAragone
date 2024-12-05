import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar /> {}
      <h1>Controll Automatización</h1> {}
      <ItemListContainer greeting="¡Bienvenidos!" /> {}
    </div>
  );
}

export default App;