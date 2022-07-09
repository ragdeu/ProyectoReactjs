import React from 'react'

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel.js';

//Imagenes
import carrousel1 from '../../img/carrousel/carrousel1.jpeg';
import carrousel2 from '../../img/carrousel/carrousel2.jpeg';
import carrousel3 from '../../img/carrousel/carrousel3.jpeg';

//Estilos
import './Carrousel.css';

function Carrousel() {
    return (
        <div className='carrousel'>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={carrousel1} className="d-block w-100 c1" alt="carrousel1" />
                    </div>
                    <div className="carousel-item">
                        <img src={carrousel2} className="d-block w-100 c2" alt="carrousel2" />
                    </div>
                    <div className="carousel-item">
                        <img src={carrousel3} className="d-block w-100 c3" alt="carrousel3" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>
            </div>
        </div>
    )
}

export default Carrousel;