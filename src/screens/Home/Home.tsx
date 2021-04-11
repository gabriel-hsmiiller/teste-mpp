import React from 'react';

import Categories from '../../data/categories';
import Carousel from '../../data/promo-carousel';
import CardCategory from './components/CardCategory/CardCategory';
import CommonCategories from './components/CommonCategories/CommonCategories';
import DayOffers from './components/DayOffers/DayOffers';
import NewProducts from './components/NewProducts/NewProducts';
import OfferProduct from './components/OfferProduct/OfferProduct';
import PromotionsCarousel from './components/PromotionsCarousel/PromotionsCarousel';
import './HomeStyle.scss';

interface IHomeProps {
}

interface IHomeState {
}

class Home extends React.Component<IHomeProps, IHomeState> {
    static propTypes: { };

    render() {
        return (
            <div className="home">
                <div className="categories">
                    { Categories.map(
                        (category, index) => <CardCategory content={category} key={index} />
                    )}
                </div>
                <PromotionsCarousel promotions={Carousel} />
                <DayOffers offers={[]} />
                <NewProducts products={[]} />
                <CommonCategories categories={[]} />
                <OfferProduct />
            </div>
        );
    } 
}

Home.propTypes = {}

export default Home;