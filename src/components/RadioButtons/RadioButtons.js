import React, { useState } from 'react';

//MUI material
import { RadioGroup, FormControlLabel, Radio, FormControl } from '@mui/material';
import Typography from '@mui/material/Typography';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

//Bootstraps
import 'bootstrap/dist/css/bootstrap.min.css';

//Estilos
import './RadioButtons.css';

function RadioButtons({ setPrecioEnvio }) {

    //Checkbox medios de pago
    const [valuePago, setValuePago] = useState('Efectivo');
    const handleChangePago = (event) => {
        setValuePago(event.target.value);
    };

    //Checkbox medios envio
    const [valueEnvio, setValueEnvio] = useState('retiro');
    const handleChangeEnvio = (e) => {
        setValueEnvio(e.target.value)
        if (valueEnvio === 'retiro') {
            setPrecioEnvio(700)
        } else {
            setPrecioEnvio(0)
        }

    };

    return (

        <FormControl>
            <div className='checkbox-formas-de-pago'>
                <RadioGroup
                    className='Medios-de-pago'
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={valuePago}
                    onChange={handleChangePago}
                >
                    <Typography className='tituloMedio-envio' variant="body1">
                        Medio de Pago:
                    </Typography>
                    <div className='chek-item-container'>
                        <LocalAtmIcon /><FormControlLabel className='chek-item' value='Efectivo' control={<Radio />} label="Efectivo" />
                    </div>
                    <div className='chek-item-container'>
                        <CreditCardIcon /><FormControlLabel className='chek-item' value="Tarjeta" control={<Radio />} label="Tarjeta de Crédito" />
                    </div>
                    <div className='chek-item-container'>
                        <AccountBalanceIcon /><FormControlLabel className='chek-item' value="Transferencia" control={<Radio />} label="Transferencia Bancaria" />
                    </div>
                    <div className='chek-item-container'>
                        <CardGiftcardIcon /><FormControlLabel className='chek-item' value="Mercado-Pago" control={<Radio />} label="Mercado-Pago" />
                    </div>
                </RadioGroup>
                <RadioGroup
                    id='envio-check'
                    className='envio'
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={valueEnvio}
                    onChange={handleChangeEnvio}
                >
                    <Typography className='tituloMedio-envio' variant="body1">
                        Medio de Envío:
                    </Typography>
                    <div className='chek-item-container-bootsrap'>
                        <StorefrontIcon className='StorefrontIcon' />
                        <input
                            value="retiro"
                            className="form-check-input chek-item"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault5"
                            checked={valueEnvio === "retiro" ? true : false}
                            onChange={handleChangeEnvio}
                        />
                        <label className="form-check-label" for="flexRadioDefault5">
                            Retiro por Sucursal
                        </label>
                    </div>
                    <div className='chek-item-container-bootsrap'>
                        <LocalShippingIcon className='LocalShippingIcon' />
                        <input
                            value="envio"
                            className="form-check-input chek-item"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault6"
                            checked={valueEnvio === "envio" ? true : false}
                            onChange={handleChangeEnvio}
                        />
                        <label className="form-check-label" for="flexRadioDefault6">
                            Envío a Domicilio ($ 700)
                        </label>
                    </div>
                </RadioGroup>
            </div>
        </FormControl>
    )
}

export default RadioButtons