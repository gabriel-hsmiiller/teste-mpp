import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core/';

import './OfferProductStyle.scss';

interface IOfferProductProps {
}

interface IOfferProductState {}

export default class OfferProduct extends React.Component<IOfferProductProps, IOfferProductState> {
    static propTypes: {
    };
    
    render() {
        return (
            <div className="offer-product">
                <div className="title">
                    <h2>Tá vendendo algo?</h2>
                    <p>Anuncie seu produto na plataforma e ganhe pontos e descontos exclusivos! É rápido e gratuito!</p>
                </div>
                <div className="content">
                    <button>Anuncie já</button>
                </div>
            </div>
        );
    } 
}

OfferProduct.propTypes = {
}
