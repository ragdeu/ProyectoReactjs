import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//FIREBASE - FIRESOTRE
import { collection, query, where, getDocs, documentId } from "firebase/firestore";
import { db } from '../../../src/firebase/firebaseConfig/firebaseConfig';

//Components
import ItemDetail from '../../../src/components/ItemDetail/ItemDetail';
import Spinner from '../../../src/components/Spinner/Spinner';

//Estilos
import './ItemDetailContainer.css';


function ItemDetailContainer() {
  const [item, SetItem] = useState({});
  let { id } = useParams();

  const [isLoadingItem, setIsLoadingItem] = useState(false);

  useEffect(() => {
    const cargarProducto = async () => {
      const q = query(collection(db, "REMERAS"), where(documentId(), "==", id));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((prod) => {
        SetItem({ ...prod.data(), id: prod.id });
      });
    };
    cargarProducto();
    setIsLoadingItem(true);
  }, [id]);

  return (
    <div className='ItemDetailContainer'>
      {
        isLoadingItem ?
          (<ItemDetail key={item.id} producto={item} />)
          :
          (<Spinner />)
      }
    </div>
  );
}

export default ItemDetailContainer;


