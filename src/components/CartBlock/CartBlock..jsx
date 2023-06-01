import React from "react";
import styles from './CartBlock.module.scss'
import {useDispatch} from 'react-redux'
import { removeFromCart } from '../../redux/slices/cartSlice';

 const CartBlock = ({item}) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  };

return(
  <div className={styles.cartItem}>
  <img className={styles.cartItemImage} src={item.img} alt={item.title} />
  <div className={styles.cartItemDetails}>
    <h3 className={styles.cartItemName}>{item.title}</h3>
    <p className={styles.cartItemPrice}>₴{item.price}</p>
    <p className={styles.cartItemQuantity}>Quantity: {1}</p>
  </div>
  <button onClick={handleRemoveFromCart} className={styles.cartItemRemoveButton}>Remove</button>
</div>
)
 };
 

 export default CartBlock;