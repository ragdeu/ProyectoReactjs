import React, { useContext, useEffect } from 'react';

// MUI material
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Skeleton from '@mui/material/Skeleton';

//Context
import { ProductosSeleccionados } from '../../Context/CartContext/CartContext';

//Estilos
import './Item.css';

function Item({ producto }) {

    const { isLoading, setIsloading } = useContext(ProductosSeleccionados);

    useEffect(() => {
        setIsloading(false);
    }, []);

    return (
        <Card className='card-item' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                {
                    isLoading ? (<Skeleton variant="rectangular" width={340} height={320} />)
                        :
                        (
                            <CardMedia
                                className='CardMedia-item'
                                component="img"
                                image={producto.img}
                                alt="Paella dish"
                            />
                        )
                }
                <CardContent className='CardContent-item'>
                    <Typography gutterBottom variant="h6" component="div">
                        {producto.articulo}
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        Precio: $ {producto.precio}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='btn-card-container-item'>
                <Button
                    className='btn-agregar-item'
                    variant="contained"
                    size="small"
                    color="primary">
                    Ver detalle
                </Button>
            </CardActions>
        </Card>
    );
};

export default Item;