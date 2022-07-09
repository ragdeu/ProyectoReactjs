import React, { useContext } from 'react';

//Components
import CartItem from '../../../components/CartItem/CartItem';
import CartEmpty from '../CartEmpty/CartEmpty';
import CheckOut from '../../../components/CheckOut/CheckOut'

//Context
import { ProductosSeleccionados } from '../../../Context/CartContext/CartContext';

//Estilos
import './cart.css'

function Cart() {
  const { prodsDelCarrito, cartEmpty } = useContext(ProductosSeleccionados);

  return (
    <div className='Cart-container'>
      {
        cartEmpty ? (<CartEmpty />) : (

          <div className='CartList-container'>
            <div className='CartList'>
              {
                prodsDelCarrito.map((prodComprado) => {
                  return (
                    <CartItem key={prodComprado.id} prodComprado={prodComprado} />
                  )
                })
              }
            </div>
            <div className='SumaFinal-container'>
              <CheckOut />
            </div>
          </div>
        )
      }
    </div>
  )
};

export default Cart;