import styles from './ShopsInfo.module.scss'
import React from 'react';
import ItemBlock from "../ItemBlock/ItemBlock";
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedShop } from '../../redux/slices/selectedShopSlice';



const ShopsInfo = () => {
  const shops = ["McDonald's", "KFC", "Pizza Day", "Salateira"];
  
  const dispatch = useDispatch();

const products = useSelector((state)=>state.products);
const selectedShop = useSelector((state)=>state.selectedShop)

const handleShopSelect = (shop) =>{
  dispatch(setSelectedShop(shop));
};


const filteredProducts = products.filter((product)=>product.shop === selectedShop);

  return <>
  <ul className={styles.listOfShops}>
    {
      shops.map((shop,i)=>{
        return <li key={i} onClick={()=>{handleShopSelect(shop)}} className={selectedShop === shop ? styles.active:''}>{shop}</li>
      })
    }
  </ul>
  <div className={styles.container}>
    {
   filteredProducts.map((product,i)=>{
    return <ItemBlock key={i} product={product}/>
   })
    }
  </div>
  </>;
};


export default ShopsInfo;