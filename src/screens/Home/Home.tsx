import React from 'react';

import { Categories, CommonCategories } from '../../data/categories';
import { DayOffers, NewProducts } from '../../data/products';
import { Carousel } from '../../data/promo-carousel';

import CardCategoryComponent from './components/CardCategory/CardCategory';
import CommonCategoriesComponent from './components/CommonCategories/CommonCategories';
import DayOffersComponent from './components/DayOffers/DayOffers';
import NewProductsComponent from './components/NewProducts/NewProducts';
import OfferProductComponent from './components/OfferProduct/OfferProduct';
import PromotionsCarouselComponent from './components/PromotionsCarousel/PromotionsCarousel';

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
                        (category, index) => <CardCategoryComponent content={category} key={index} />
                    )}
                </div>
                <PromotionsCarouselComponent promotions={ Carousel } />
                <hr className="divide" />
                <DayOffersComponent offers={ DayOffers } />
                <hr className="divide" />
                <NewProductsComponent products={ NewProducts } />
                <hr className="divide" />
                <CommonCategoriesComponent categories={ CommonCategories } />
                <OfferProductComponent />
            </div>
        );
    } 
}

Home.propTypes = {}

export default Home;