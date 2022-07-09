import React from 'react'

//MUI
import CircularProgress from '@mui/material/CircularProgress';

//Estilos
import './Spinner.css'

function Spinner() {
  return (
    <div className='spinner'>
      <CircularProgress />
    </div>
  )
}

export default Spinner;