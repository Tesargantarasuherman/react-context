import logo from './logo.svg';
import './App.css';
import ContextPage from './ContextPage';
import { CartContext } from './CartContex';
import Navbar from './components/Navbar';
import { useState } from 'react';
import ProductComponent from './components/ProductComponent';
import HookReducer from './HookReducer';

function App() {

  const [value,setValue] = useState(0)

  return (
    <>
      {/* <ContextPage /> */}
      <CartContext.Provider value={{value,setValue}}>
          <Navbar />
          <ProductComponent />
          <HookReducer />
      </CartContext.Provider>
    </>
  );
}

export default App;
