import React from 'react'; 
import Cart from '../cart/cart.component';
import Form from '../form/form.component';
import './cart-container.styles.scss';
const CartContainer = () => {
    return(
        <section className='cartConainer-container'>
            <Cart/>
            <Form/>
        </section>
    );
}

export default CartContainer;