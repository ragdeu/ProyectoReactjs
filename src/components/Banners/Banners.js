import React from 'react';
import { Link } from 'react-router-dom';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Estilos
import './Banners.css';

//Imagenes
import banner1 from '../../img/Banners/Banner1.jpeg';
import banner2 from '../../img/Banners/Banner2.jpeg';
import banner3 from '../../img/Banners/Banner3.jpeg';
import banner4 from '../../img/Banners/Banner4.jpeg';

function Banners() {
  return (
    <div className='Banners'>
      <div className='Banners-superior'>
        <Link to='/items' style={{ textDecoration: 'none' }}>
          <div className='Banner-1'>
            <div className="card text-white">
              <img src={banner3} className="card-img1" alt="banner1" />
              <div className="card-img-overlay">
                <h5 className="card-title1">SUMMER SALE</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/items' style={{ textDecoration: 'none' }}>
          <div className='Banner-2'>
            <div className="card text-white">
              <img src={banner2} className="card-img2" alt="banner1" />
              <div className="card-img-overlay">
                <h5 className="card-title2">ROCK IT</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className='Banners-inferior'>
        <Link to='/items' style={{ textDecoration: 'none' }}>
          <div className='Banner-3'>
            <div className="card text-white">
              <img src={banner1} className="card-img3" alt="banner1" />
              <div className="card-img-overlay">
                <h5 className="card-title3">BE YOURSELF</h5>
              </div>
            </div>
          </div>
        </Link>
        <Link to='/items' style={{ textDecoration: 'none' }}>
          <div className='Banner-4'>
            <div className="card text-white">
              <img src={banner4} className="card-img4" alt="banner1" />
              <div className="card-img-overlay">
                <h5 className="card-title4">NEW IN</h5>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default Banners;


