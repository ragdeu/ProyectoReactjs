import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

//MUI material
import { FormControl, TextField, Box, Typography, Button, Alert } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

//FIREBASE - FIRESOTRE
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/firebaseConfig/firebaseConfig';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './Form.css';

const initialState = {
    Nombre: '',
    Apellido: '',
    email: '',
    Telefono: ''
}

function Form({ handleClose, classDisabled, setClassDisabled, valorFinal }) {

    const { setCartEmpty, prodsDelCarrito, setProdsDelCarrito, IDDelPedido, SetIDDelPedido } = useContext(ProductosSeleccionados);

    const [values, SetValues] = useState(initialState);

    const carrito = [];
    prodsDelCarrito.forEach(element => {
        const productoComprado = {
            ID: element.id,
            Articulo: element.articulo,
            Cantidad: element.cantidad,
            Precio: element.precio
        };
        carrito.push(productoComprado);
    });

    const onChange = (e) => {
        const { value, name } = e.target;
        const f = new Date();
        const fecha = (f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear() + "   " + f.getHours() + ":" + f.getMinutes());

        SetValues({
            ...values,
            [name]: value,
            Productos: carrito,
            Total: valorFinal(),
            Fecha: fecha
        });
    };

    //Alerts
    const [errorMessage, setErrorMessage] = useState(false);
    const [errorMailMessage, setErrorMailMessage] = useState(false);
    const [errorMailRepetido, setErrorMailRepetido] = useState(false);

    //Cerrar Alerts
    const [openErrorMessage, setOpenErrorMessage] = useState(true);
    const [openMailMessage, setOpenMailMessage] = useState(true);
    const [openMailRepetido, setOpenMailRepetido] = useState(true);


    const onSubmit = async (e) => {
        e.preventDefault();

        if (values.Nombre === "" || values.Apellido === "" || values.email === "" || values.Telefono === "") {
            setErrorMessage(true);
            setOpenErrorMessage(true);
        } else if (!(/^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(values.email))) {
            setErrorMailMessage(true);
            setOpenMailMessage(true);
            setOpenErrorMessage(false);
        } else if (values.email !== values.email2) {
            setErrorMailRepetido(true);
            setOpenErrorMessage(false);
            setOpenMailMessage(false);
            setOpenMailRepetido(true);
        } else {
            const docRef = await addDoc(collection(db, "pedidos"), {
                values
            });
            SetIDDelPedido(docRef.id);
            setErrorMessage(false);
            setErrorMailMessage(false);
            setErrorMailRepetido(false);
            setClassDisabled(true);
            SetValues(initialState);
            setProdsDelCarrito([]);
        };
    };

    const finalizarCompra = () => {
        setCartEmpty(true);
        SetIDDelPedido('');
        setProdsDelCarrito([]);
    };

    return (
        <form className={classDisabled ? ('Form-disabled') : ('Form')}>
            <FormControl fullWidth={true}>
                <Box className='box-modal'>
                    {
                        IDDelPedido ? (null)
                            :
                            (
                                <div>
                                    <HighlightOffIcon
                                        onClick={handleClose}
                                        className='HighlightOffIcon-form'
                                    />
                                </div>
                            )
                    }
                    {
                        errorMessage &&
                        <Collapse in={openErrorMessage}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenErrorMessage(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                className='Alert-error'
                                severity="error"
                            >
                                Por favor, completa todos los campos.</Alert></Collapse>
                    }
                    {
                        errorMailMessage &&
                        <Collapse in={openMailMessage}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenMailMessage(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                className='Alert-error'
                                severity="error"
                            >Por favor, introduce un e-mail válido.</Alert></Collapse>
                    }
                    {
                        errorMailRepetido &&
                        <Collapse in={openMailRepetido}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setOpenMailRepetido(false);
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                className='Alert-error'
                                severity="error"
                            >Los mails no coinciden.</Alert></Collapse>
                    }
                    {
                        IDDelPedido ? (
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Revisa tu casilla de correo!
                            </Typography>
                        )
                            :
                            (
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Completa tus datos
                                </Typography>
                            )
                    }
                    {
                        IDDelPedido ? (null)
                            :
                            (
                                <>
                                    <TextField
                                        className='box-modal-textfield'
                                        id="outlined-basic"
                                        label="Nombre"
                                        variant="outlined"
                                        name="Nombre"
                                        value={values.Nombre}
                                        onChange={onChange} />
                                    <TextField
                                        className='box-modal-textfield'
                                        id="outlined-basic"
                                        label="Apellido"
                                        variant="outlined"
                                        name="Apellido"
                                        value={values.Apellido}
                                        onChange={onChange} />
                                    <TextField
                                        className='box-modal-textfield'
                                        id="outlined-basic"
                                        label="e-mail"
                                        variant="outlined"
                                        name="email"
                                        value={values.email}
                                        onChange={onChange} />
                                    <TextField
                                        className='box-modal-textfield'
                                        id="outlined-basic"
                                        label="Repite tu e-mail"
                                        variant="outlined"
                                        name="email2"
                                        value={values.email2}
                                        onChange={onChange} />
                                    <TextField
                                        type="number"
                                        className='box-modal-textfield'
                                        id="outlined-basic"
                                        label="Telefono"
                                        variant="outlined"
                                        name="Telefono"
                                        value={values.Telefono}
                                        onChange={onChange} />
                                </>
                            )
                    }
                    {
                        IDDelPedido ? (null)
                            :
                            (
                                <Link to='/items' style={{ textDecoration: 'none' }}>
                                    <Button
                                        className='btn-finalizar-compra'
                                        onClick={onSubmit}
                                        variant="contained"
                                        size="large"
                                        color="success"
                                    >
                                        finalizar compra
                                    </Button>
                                </Link>
                            )
                    }
                    {
                        IDDelPedido && (
                            <>
                                <Alert className="Alert-compra" severity="success">Felicitaciones! Tu código de compra es: {IDDelPedido}</Alert>
                                <Link to='/items' style={{ textDecoration: 'none' }}>
                                    <Button
                                        onClick={finalizarCompra}
                                        className='btn-retornar'
                                        variant="contained"
                                        size="large"
                                    >
                                        Volver al menu principal
                                    </Button>
                                </Link>
                            </>
                        )
                    }
                </ Box>
            </FormControl>
        </form>
    )
}

export default Form;