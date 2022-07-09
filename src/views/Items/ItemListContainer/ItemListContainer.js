import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

//Context
import { ProductosSeleccionados } from '../../../Context/CartContext/CartContext';

//Components
import Item from '../../../components/Item/Item';
import Spinner from '../../../components/Spinner/Spinner';

//Estilos
import './ItemListContainer.css'

function ItemListContainer() {

  const { products, cargarProductosTotales, isLoading, setIsloading } = useContext(ProductosSeleccionados);

  useEffect(() => {
    cargarProductosTotales();
    setIsloading(false);
  }, []);

  return (
    <div className={isLoading ? ('temListContainer-spinner') : ('ItemListContainer')}>
      {
        isLoading ? (<Spinner />) : (
          products.map((product) => {
            return (
              <Link to={`item/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                <Item producto={product} />
              </Link>
            );
          })
        )
      }
    </div>
  );
};

export default ItemListContainer;
