import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio/Inicio';
import Menu from './components/Menu/Menu';
import Iniciarsesion from './components/Iniciarsesion/Iniciarsesion';
import Miperfil from './components/Miperfil/Miperfil';
import Registro from './components/Registro/Registro';
import NavBarComercio from './layouts/Navbar';
import Visualizar from './components/Menu/Visualizar';

import ShoppingCard from './components/ShoppingCard/ShoppingCart';
// import { PayPalScriptProvider } from '@paypal/react-paypal-js';


function App() {
  return (
    <div className="App">
      
    {/* <PayPalScriptProvider opcion= {{"client-id":"AVx3UcHnRMBHQ_L3rZjZE0cI6wFvn1HcifiBzJGYPT7xyV4ntCWgdFpuk4fAVCOtV6CN5Sae-wsrNQ4X"}}> */}

      <Routes>
        <Route path='/' element={ <NavBarComercio /> }>
          <Route index element= { <Inicio /> }/>
          <Route path='Menu' element= { <Menu /> }/>
          <Route path='Iniciarsesion' element= { <Iniciarsesion /> }/>
          <Route path='Registro' element= { <Registro /> }/>
          <Route path='/usuarios/:id' element= { <Miperfil /> }/>
          <Route path='ShoppingCard' element= { <ShoppingCard /> }/>
          <Route path='/platos/:id' element= { <Visualizar /> }/>
          <Route path='*' element= { <Navigate replace to="/" /> }/>

        </Route>
      </Routes>
      
    {/* </PayPalScriptProvider> */}
      



    </div>

  );;
}

export default App;

