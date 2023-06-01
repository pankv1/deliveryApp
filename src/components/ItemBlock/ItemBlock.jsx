import styles from './ItemBlock.module.scss'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice';



const ItemBlock = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = () =>{
    dispatch(addToCart(product))
  }

  return <div className={styles.itemcontainer}>
    <img className={styles.itempic}  src={product.img}/>
    <p className={styles.itemtitle}>{product.title}</p>
    <p className={styles.itemprice}>{product.price} ₴</p>
    <button onClick={handleAddToCart} className={styles.addtocart}>Add to cart</button>
  </div>;
};


export default ItemBlock;