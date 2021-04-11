import React, { Requireable } from 'react';
import PropTypes from 'prop-types';

import './PromotionsCarouselStyle.scss';

interface IPromotionsCarouselProps {
    promotions: any[];
}

interface IPromotionsCarouselState {
}

class PromotionsCarousel extends React.Component<IPromotionsCarouselProps, IPromotionsCarouselState> {
    static propTypes: {
        promotions: Requireable<any[]>
     };

    render() {
        const { promotions } = this.props;

        return(
            <div className="carousel">
                {
                    (promotions.map((promo) => (
                        <div className="promotion" key={promo.page}>
                            <img src={promo.image} />
                        </div>
                    )))
                }  
            </div>
        );
    } 
}

PromotionsCarousel.propTypes = {
    promotions: PropTypes.arrayOf(PropTypes.any)
};

export default PromotionsCarousel;