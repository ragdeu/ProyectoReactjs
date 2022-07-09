//React-Router-DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from '../src/views/Items/ItemListContainer/ItemListContainer';
import ItemListCategory from './views/Category/ItemListCategory/ItemListCategory';
import ItemDetailContainer from '../src/components/ItemDetailContainer/ItemDetailContainer';
import Cart from './views/Cart/cart/cart';
import Footer from './components/Footer/Footer';
import Home from './views/Home/Home';
import ItemListArtist from './views/Artist/ItemListArtist/ItemListArtist';
import { ProdSeleccionadosProvider } from './Context/CartContext/CartContext';
import ErrorPage from './views/ErrorPage/ErrorPage';

import './App.css';

function App() {
  return (
    <ProdSeleccionadosProvider>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/items' element={<ItemListContainer />}></Route>
            <Route path='/items/*' element={<ErrorPage />}></Route>
            <Route path='items/item/:id' element={<ItemDetailContainer />}></Route>
            <Route path='/category/:category' element={<ItemListCategory />}></Route>
            <Route path='/artist/:artist' element={<ItemListArtist />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<ErrorPage />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </ProdSeleccionadosProvider>
  );
};

export default App;