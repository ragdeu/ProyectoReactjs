import React from 'react';
import { Link } from 'react-router-dom';

//MUImaterial
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

//Estilos
import './CartEmpty.css'

//Imagen
import emptyCart from '../../../img/CartEmpty/emptyCart.png';

function CartEmpty() {
  return (
    <div className='CartEmpty'>
      <h2>Tu Carrito está vacío</h2>
      <img src={emptyCart} alt="emptyCart" className='img-emptyCart' />
      <Link to='/items' style={{ textDecoration: 'none' }}>
        <Button
          className='btn-volverAlMenu'
          variant="contained"
          size="large"
        >
          Volver
          <ArrowBackIcon style={{ marginLeft: '10px' }} />
        </Button>
      </Link>
    </div>
  )
}

export default CartEmpty;