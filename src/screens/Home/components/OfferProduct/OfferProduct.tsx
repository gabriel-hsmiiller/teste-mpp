import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import './OfferProductStyle.scss';
import { Icon } from '@material-ui/core/';

interface IOfferProductProps {
}

interface IOfferProductState {}

export default class OfferProduct extends React.Component<IOfferProductProps, IOfferProductState> {
    static propTypes: {
    };
    
    render() {
        return (
            <div className="card">
                <div>
                    <p>Tá vendendo algo?</p>
                    <p>Anuncie seu produto na plataforma e ganhe pontos e descontos exclusivos! É rápido e gratuito!</p>
                </div>
                <div>
                    <button>Anuncie já</button>
                </div>
            </div>
        );
    } 
}

OfferProduct.propTypes = {
}
