import React from 'react'; 
import Cart from '../cart/cart.component';

import './cart-container.styles.scss';
const CartContainer = () => {
    return(
        <section className='cartConainer-container'>
            <Cart/>
        </section>
    );
}

export default CartContainer;