import React, { Requireable } from 'react';
import PropTypes from 'prop-types';

import CardProduct from '../CardProduct/CardProduct';
import { Product } from '../../../../data/products';

import './DayOffersStyle.scss';
import CardsCarousel from '../../../../components/CardsCarousel/CardsCarousel';

interface IDayOffersProps {
    offers: Product[]
}

interface IDayOffersState {
}

export default class DayOffers extends React.Component<IDayOffersProps, IDayOffersState> {
    static propTypes: {
        offers: Requireable<any[]>
    };

    render() {
        const { offers } = this.props;

        return (
            <div className="day-offers">
                <div className="title">
                    <h2>Ofertas do dia</h2>
                    <p>Aproveite as melhores ofertas do site</p>
                </div>
                <div className="content">
                    <CardsCarousel<Product> cards={offers} Element={CardProduct} />
                </div>
            </div>
        );
    } 
}

DayOffers.propTypes = {
    offers: PropTypes.arrayOf(
        PropTypes.exact({
            image: PropTypes.string,
            price: PropTypes.number,
            discount: PropTypes.number,
            description: PropTypes.string,
            title: PropTypes.string,
        })
    )
}
