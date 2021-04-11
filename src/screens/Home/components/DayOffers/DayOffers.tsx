import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core/';

import CardProduct from '../CardProduct/CardProduct';
import { Product } from '../../../../data/products';

import './DayOffersStyle.scss';

interface IDayOffersProps {
    offers: Product[]
}

interface IDayOffersState {
    carouselPage: number,
    carousel: Product[],
}

export default class DayOffers extends React.Component<IDayOffersProps, IDayOffersState> {
    static propTypes: {
        offers: Requireable<any[]>
    };

    state = {
        carouselPage: 0,
        carousel: [],
    }

    componentDidMount(){
        this.setCarousel();
    }

    setCarousel(){
        const { offers } = this.props;
        const { carouselPage } = this.state;

        const carousel = offers.slice(carouselPage * 4, (carouselPage+1)*4 );

        this.setState({ carousel });
    }

    setCarouselPage(nPage: number){
        const { carouselPage } = this.state;
        const { offers } = this.props;

        const maxRight = Math.ceil(offers.length / 4);

        let page: number = carouselPage;
        if(carouselPage + nPage < maxRight && carouselPage + nPage >= 0){
            page = carouselPage + nPage;
        }

        this.setState({ carouselPage: page }, () => this.setCarousel());
    }

    changePage(direction: string) {
        if(direction === 'left'){
            this.setCarouselPage(-1)
        } else if (direction === 'right'){
            this.setCarouselPage(1)
        }
    }
    
    render() {
        const { carousel } = this.state;

        return (
            <div className="day-offers">
                <div className="title">
                    <h2>Ofertas do dia</h2>
                    <p>Aproveite as melhores ofertas do site</p>
                </div>
                <div className="content">
                    <div className="controls left" onClick={() => this.changePage('left')}>
                        <Icon style={{ fontSize: 48 }}>chevron_left</Icon>
                    </div>
                    <div className="offers">
                        { carousel.map(
                            (offer, index) => <CardProduct content={offer} key={index} />
                        )}
                    </div>
                    <div className="controls right" onClick={() => this.changePage('right')}>
                        <Icon style={{ fontSize: 48 }}>chevron_right</Icon>
                    </div>
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
