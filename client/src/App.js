import React from 'react';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div className="App">
        <AppNavBar />
        <ShoppingList />
    </div>
  );
}

export default App;
