import React from 'react';
import styles from './CartInfo.module.scss'
import { useSelector } from 'react-redux';
import {addToCart} from '../../redux/slices/cartSlice';
import CartBlock from '../CartBlock/CartBlock.';

import cartIcon from '../../image/cart.svg'

 const CartInfo = () => {
    const cartItems = useSelector(state => state.cart);

    const [total, setTotal] = React.useState(0);
    React.useEffect(() => {
      let totalPrice = 0;
      cartItems.forEach(item => {
        totalPrice += item.price;
      });
      setTotal(totalPrice);
    }, [cartItems]);

    return (
      <div className={styles.cart}>
        <h2 className={styles.cartTitle}>Make an order</h2>
        {cartItems.length === 0 ? (
          <>
          <img className={styles.emptyCartIcon}  src={cartIcon}/>
           <h3 className={styles.emptyCartText}>Your cart is empty</h3>
          </>
        ) : (
          <>
            {cartItems.map(item => (
              <CartBlock
                key={item.id}
                item={item}
              />
            ))}
            <div className={styles.cartTotal}>
              <p className={styles.cartTotalText}>Total Price:</p>
              <p className={styles.cartTotalPrice}>₴{total}</p>
            </div>
          </>
        )}
      </div>
    );
  };
export default CartInfo;