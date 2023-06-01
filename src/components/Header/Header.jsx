import {Link} from 'react-router-dom'
import styles from './Header.module.scss'

import cartImg from '../../image/cart.svg'



const Header = () =>{

  return(
        <header className={styles.header}>
      <div className={styles.logo}><a href="#">deliveryApp</a></div>
      <nav>
        <ul className={styles.navList}>
        <li>
            <Link to='/'>Shops</Link>
          </li>
          <li>
            <Link to='/Coupons'>Coupons</Link>
          </li>
          <li>
            <Link to='/Cart'><img className={styles.cartImg} src={cartImg} alt="" /></Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
