import { Navbar } from './components/Navbar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import {  CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout';


function App() {

  return (
    <CartProvider>
     
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to={"/"} />} />
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/checkout' element={ <Checkout /> } />

        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;