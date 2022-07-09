import React, { useState, useContext } from 'react';

//MUI material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

//Components
import Form from '../Form/Form';
import RadioButtons from '../RadioButtons/RadioButtons';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './CheckOut.css'

function CheckOut() {
    const { prodsDelCarrito, setProdsDelCarrito, setCartEmpty } = useContext(ProductosSeleccionados);

    const totalDeProdcutos = () => {
        return prodsDelCarrito.reduce((acc, value) => acc + value.cantidad, 0)
    };

    const valorFinal = () => {
        return prodsDelCarrito.reduce((acc, value) => acc + (value.precio * value.cantidad), 0);
    };

    //Precio del envio - Se suma al saldo final en caso de querer envio a domicilio
    const [precioEnvio, setPrecioEnvio] = useState(0)

    //Modal Form
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //Esta variable habilita una clase que "acomoda" el css una vez que se presenta el ID de compra
    const [classDisabled, setClassDisabled] = useState(false);

    const vaciarCarrito = () => {
        setProdsDelCarrito([]);
        setCartEmpty(true);
    }

    return (
        <div className={classDisabled ? ('CheckOut-disabled') : ('CheckOut')}>
            <Card >
                <CardContent>
                    <Typography color="text.secondary">
                        Cantidad Total de Productos: {totalDeProdcutos()}
                    </Typography>
                    <Typography variant="h5" component="div">
                        TOTAL: $ {valorFinal() + precioEnvio}
                    </Typography>
                    <br />
                    <RadioButtons setPrecioEnvio={setPrecioEnvio} />
                    <br />
                    <br />
                    <br />
                    <Typography variant="body2">
                        Acepto sin reservas las condiciones generales
                    </Typography>
                </CardContent>
                <CardActions className='btn-finalizar-compra-container'>
                    <div className='modal-form'>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Form
                                handleClose={handleClose}
                                setClassDisabled={setClassDisabled}
                                classDisabled={classDisabled}
                                valorFinal={valorFinal}
                            />
                        </Modal>
                    </div>
                    <Button
                        className='btn-confirmar-compra'
                        variant="contained"
                        size="large"
                        color="success"
                        onClick={handleOpen}
                    >
                        Confirmar Compra
                        <ShoppingCartIcon style={{ marginLeft: '10px' }} />
                    </Button>
                    <Button
                        className='btn-eliminar-carrito'
                        variant="contained"
                        size="large"
                        color="success"
                        onClick={vaciarCarrito}
                    >
                        Vaciar carrito
                        <DeleteIcon style={{ marginLeft: '10px' }} />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default CheckOut;