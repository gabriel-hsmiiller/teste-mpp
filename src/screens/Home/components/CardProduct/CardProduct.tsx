import React, { Requireable } from 'react';
import PropTypes from 'prop-types';

import { Product } from '../../../../data/products';

import './CardProductStyle.scss';

interface ICardProductProps {
    content: Product;
}

interface ICardProductState {}

export default class CardProduct extends React.Component<ICardProductProps, ICardProductState> {
    static propTypes: {
        content: Requireable<any>,
    };

    currency = (n: number) => 'R$ ' + n.toFixed(2).replace('.',',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    maxTextTitle = (s: string) => {
        return s.slice(0,18).length < s.length ? s.slice(0,18).concat('...') : s;
    }

    maxTextDescription = (s: string) => {
        return s.slice(0,50).length < s.length ? s.slice(0,50).concat('...') : s;
    }
    
    render() {
        const { content } = this.props;

        return (
            <div className="card-product">
                <div className="image"><img src={content.image} alt="Product" /></div>
                <div className="description">
                    <h3>{ this.maxTextTitle(content.title) }</h3>
                    <p>{ this.maxTextDescription(content.description) }</p>
                </div>
                <div className="values">
                    <p className="price">{ this.currency(content.price) }</p>
                </div>
                <div className={['discount-wrap', !!content.discount ? 'has-discount' : null ].join(' ')}>
                    <p className='discount'>-{ content.discount }%</p>
                </div>
            </div>
        );
    } 
}

CardProduct.propTypes = {
    content: PropTypes.exact({ 
        image: PropTypes.string, 
        price: PropTypes.number,
        discount: PropTypes.number,
        description: PropTypes.string,
        title: PropTypes.string,
    }),
}
