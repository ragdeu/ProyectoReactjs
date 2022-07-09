import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//FIREBASE - FIRESOTRE
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../../../src/firebase/firebaseConfig/firebaseConfig';

//Components
import Spinner from '../../../components/Spinner/Spinner';
import Item from '../../../components/Item/Item';

//Estilos
import './ItemListCategory.css'

function ItemListCategory() {
  const [itemsForCategory, setItemsForCategory] = useState([]);
  const { category } = useParams();

  const [isCategoryLoading, setIsCategoryLoading] = useState(false);

  useEffect(() => {
    const cargarCategoria = async () => {
      const q = query(collection(db, "REMERAS"), where("categoria", "==", category));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((prod) => {
        docs.push({ ...prod.data(), id: prod.id })
      });
      setItemsForCategory(docs);
    };
    cargarCategoria();
    setIsCategoryLoading(true);
  }, [category]);

  return (
    <div className='ItemListCategory'>
      {
        isCategoryLoading ? (
          itemsForCategory.map((product) => {
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

export default ItemListCategory;
