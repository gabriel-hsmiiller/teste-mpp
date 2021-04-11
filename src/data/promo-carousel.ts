import Promo1 from '../assets/promo-1.png';
import Promo2 from '../assets/promo-2.png';

export interface Frame {
    page: number;
    image: any;
}

export const Carousel: Frame[] = [
    { page: 1, image: Promo1 },
    { page: 2, image: Promo2 },
]