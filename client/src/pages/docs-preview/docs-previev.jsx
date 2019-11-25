import React from 'react'; 

import Header from '../../components/header/header.component';
import CartContainer from '../../components/cart-container/cart-container.component';

import './docs-preview.styles.scss';

class DocsPreviev extends React.Component {
    render(){
        return(
            <section className='docsPreviev-container'>
                <Header/>
                <CartContainer/>
            </section>
        );
    }
}

export default DocsPreviev;