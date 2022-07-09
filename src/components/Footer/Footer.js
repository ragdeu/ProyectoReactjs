import React from 'react';

//MUI
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

//Estilos
import './Footer.css'

function Footer() {
    return (
        <div className="footer-clean">
            <footer>
                <div className="footer-container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Nosotros</h3>
                            <ul>
                                <li><a href="#">Sugerencias</a></li>
                                <li><a href="#">Trabaja con nosotros</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Legales</h3>
                            <ul>
                                <li><a href="#">Términos y condiciones</a></li>
                                <li><a href="#">Políticas de privacidad</a></li>
                                <li><a href="#">Bases y condiciones</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social">
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" ><i ><InstagramIcon /></i></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" ><i ><FacebookIcon /></i></a>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" ><i ><YouTubeIcon /></i></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" ><i ><TwitterIcon /></i></a>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <p>©Ragde T-Shirt Copyright- Desarrollado por Edgar Corona - 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;