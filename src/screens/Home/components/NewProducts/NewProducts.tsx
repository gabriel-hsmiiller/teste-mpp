import React, { Requireable } from 'react';
import PropTypes from 'prop-types';

import CardProduct from '../CardProduct/CardProduct';
import { Product } from '../../../../data/products';

import './NewProductsStyle.scss';
import CardsCarousel from '../../../../components/CardsCarousel/CardsCarousel';

interface INewProductsProps {
    products: Product[]
}

interface INewProductsState {}

export default class NewProducts extends React.Component<INewProductsProps, INewProductsState> {
    static propTypes: {
        products: Requireable<any[]>
    };
    
    render() {
        const { products } = this.props;

        return (
            <div className="new-products">
                <div className="title">
                    <h2>Produtos recentes</h2>
                    <p>Confira os últimos produtos adicionados à plataforma</p>
                </div>
                <div className="content">
                    <CardsCarousel<Product> cards={products} Element={CardProduct} />
                </div>
            </div>
        );
    } 
}

NewProducts.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.exact({
            image: PropTypes.string,
            price: PropTypes.number,
            discount: PropTypes.number,
            description: PropTypes.string,
            title: PropTypes.string,
        })
    )
}
