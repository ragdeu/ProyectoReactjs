import React from 'react'

//Components
import Carrousel from '../../components/Carrousel/Carrousel';
import Banners from '../../components/Banners/Banners';

//Estilos
import './Home.css'

function Home() {
  return (
    <div className='Home'>
      <Carrousel />
      <Banners />
    </div>
  )
}

export default Home;