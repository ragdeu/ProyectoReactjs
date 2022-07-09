import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//FIREBASE - FIRESOTRE
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../../src/firebase/firebaseConfig/firebaseConfig';

//Components
import Spinner from '../../../components/Spinner/Spinner';
import Item from '../../../components/Item/Item';

//Estilos
import './ItemListArtist.css'

function ItemListArtist() {
  const [itemsForArtist, setItemsForArtist] = useState([]);
  const { artist } = useParams();

  const [isArtistLoading, setIsArtistLoading] = useState(false);

  useEffect(() => {
    const cargarArtista = async () => {
      const q = query(collection(db, "REMERAS"), where("artista", "==", artist));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((prod) => {
        docs.push({ ...prod.data(), id: prod.id })
      });
      setItemsForArtist(docs);
    };
    cargarArtista();
    setIsArtistLoading(true);
  }, [artist]);

  return (
    <div className='ItemListArtist'>
      {
        isArtistLoading ? (
          itemsForArtist.map((product) => {
            return (
              <Link to={`/items/item/${product.id}`} key={product.id} style={{ textDecoration: 'none' }}>
                <Item producto={product} />
              </Link>
            );
          })
        )
          :
          (<Spinner />)
      }
    </div>
  )
};

export default ItemListArtist;