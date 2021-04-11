import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import './CardProductStyle.scss';
import { Icon } from '@material-ui/core/';

interface ICardProductProps {
    content: { image: string, price: string, discount?: string, description: string };
}

interface ICardProductState {}

export default class CardProduct extends React.Component<ICardProductProps, ICardProductState> {
    static propTypes: {
        content: Requireable<any>,
    };
    
    render() {
        const { content } = this.props;

        return (
            <div className="card">
                <div className="image"><img src={content.image} /></div>
                <div className="label"><p>{ content.price }</p></div>
                <div className="label"><p>{ content.discount }</p></div>
                <div className="label"><p>{ content.description }</p></div>
            </div>
        );
    } 
}

CardProduct.propTypes = {
    content: PropTypes.exact({ 
        image: PropTypes.string, 
        price: PropTypes.string,
        discount: PropTypes.string,
        description: PropTypes.string,
    }),
}
