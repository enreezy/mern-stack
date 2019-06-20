import React from 'react';
import AppNavBar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (
    <Provider store={store}>
        <div className="App">
            <AppNavBar />
            <Container>
                <ItemModal />
                <ShoppingList />
            </Container>
        </div>
    </Provider>
  );
}

export default App;
