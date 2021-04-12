import React, { Requireable } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core/';

import './CardsCarouselStyle.scss';

interface ICardsCarouselProps<T> {
    cards: T[],
    Element: any
}

interface ICardsCarouselState<T> {
    carouselPage: number,
    carousel: T[],
}

export default class CardsCarousel<T> extends React.Component<ICardsCarouselProps<T>, ICardsCarouselState<T>> {
    static propTypes: {
        cards: Requireable<any[]>,
        Element: Requireable<any>
    };

    state = {
        carouselPage: 0,
        carousel: [],
    }

    componentDidMount(){
        this.setCarousel();
    }

    setCarousel(){
        const { cards } = this.props;
        const { carouselPage } = this.state;

        const carousel = cards.slice(carouselPage * 4, (carouselPage+1)*4 );

        this.setState({ carousel });
    }

    setCarouselPage(nPage: number){
        const { carouselPage } = this.state;
        const { cards } = this.props;

        const maxRight = Math.ceil(cards.length / 4);

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

    checkActiveControl(direction: string): string {
        const { carouselPage } = this.state;
        const { cards } = this.props;

        const maxRight = Math.floor((cards.length - 1) / 4);

        if(direction === 'left' && carouselPage === 0){
            return 'disable';
        } else if (direction === 'right' && carouselPage === maxRight){
            return 'disable'
        }

        return '';
    }
    
    render() {
        const { carousel } = this.state;
        const { Element } = this.props;

        return (
            <div className="cards-carousel">
                <div className={['controls', 'left', this.checkActiveControl('left')].join(' ')} onClick={() => this.changePage('left')}>
                    <Icon style={{ fontSize: 48 }}>chevron_left</Icon>
                </div>
                <div className="carousel-content">
                    { carousel.map(
                        (offer, index) => <Element content={offer} key={index} />
                    )}
                </div>
                <div className={['controls', 'right', this.checkActiveControl('right')].join(' ')} onClick={() => this.changePage('right')}>
                    <Icon style={{ fontSize: 48 }}>chevron_right</Icon>
                </div>
            </div>
        );
    } 
}

CardsCarousel.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.any),
    Element: PropTypes.any
}
