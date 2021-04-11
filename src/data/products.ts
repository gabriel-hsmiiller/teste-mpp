export interface Product {
    image: string;
    price: number;
    discount?: number;
    description: string;
    title: string;
}

export const DayOffers: Product[] = [
    { title: 'Gatinho', description: 'Gato fofo', discount: 12, image: 'https://http.cat/100', price: 500 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 12, image: 'https://http.cat/100', price: 500 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 12, image: 'https://http.cat/100', price: 500 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 12, image: 'https://http.cat/100', price: 500 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 10, image: 'https://http.cat/100', price: 600 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 10, image: 'https://http.cat/100', price: 600 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 10, image: 'https://http.cat/100', price: 600 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 10, image: 'https://http.cat/100', price: 600 },
    { title: 'Gatinho', description: 'Gato fofo', discount: 8, image: 'https://http.cat/100', price: 700 },
]

export const NewProducts: Product[] = [
    {  title: 'Gatinho', description: 'Gato fofo', image: 'https://http.cat/100', price: 500 }
]