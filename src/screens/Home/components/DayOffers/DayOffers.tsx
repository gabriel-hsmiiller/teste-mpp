import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import './DayOffersStyle.scss';
import { Icon } from '@material-ui/core/';
import CardProduct from '../CardProduct/CardProduct';

interface IDayOffersProps {
    offers: { image: string, price: string, discount: string, description: string }[]
}

interface IDayOffersState {}

export default class DayOffers extends React.Component<IDayOffersProps, IDayOffersState> {
    static propTypes: {
        offers: Requireable<any[]>
    };
    
    render() {
        const { offers } = this.props;

        return (
            <div className="day-offers">
                <div>
                    <p>Ofertas do dia</p>
                    <p>Aproveite as melhores ofertas do site</p>
                </div>
                <div>
                    { offers.map(
                        (offer, index) => <CardProduct content={offer} key={index} />
                    )}
                </div>
            </div>
        );
    } 
}

DayOffers.propTypes = {
    offers: PropTypes.arrayOf(
        PropTypes.exact({
            image: PropTypes.string,
            price: PropTypes.string,
            discount: PropTypes.string,
            description: PropTypes.string,
        })
    )
}
