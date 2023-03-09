import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar2 } from './components/Navbar/Navbar';
import { ItemsListContainer } from './components/ItemsListContainer/ItemsListContainer';
import { ProductCard } from './components/ProductCard/ProductCard.js';

function App() {
  return (
    <div>
       <Navbar2/>
      <ItemsListContainer greeting={'Bienvenidos a Hardware World'}/>
      <ProductCard/>
    </div>
  );
}

export default App;
