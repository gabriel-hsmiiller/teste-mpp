import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core/';

import CardProduct from '../CardProduct/CardProduct';
import { Product } from '../../../../data/products';

import './NewProductsStyle.scss';

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
                <div>
                    <p>Produtos recentes</p>
                    <p>Confira os últimos produtos adicionados à plataforma</p>
                </div>
                <div>
                    { products.map(
                        (product, index) => <CardProduct content={product} key={index} />
                    )}
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
        })
    )
}
