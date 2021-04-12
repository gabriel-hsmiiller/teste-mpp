export interface Product {
    image: string;
    price: number;
    discount?: number;
    description: string;
    title: string;
}

export const DayOffers: Product[] = [
    { title: 'Box Sherlock Holmes', description: 'Box de livros Sherlock Holmes', discount: 12, image: 'https://photos.enjoei.com.br/box-sherlock-holmes-obra-completa-38723071/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMjM3NDM4Ni9iMzE2ZmIwMjkwMGZiNTdmMGZjNGQxNGM1ODY1ZmQwZS5qcGc', price: 90 },
    { title: 'Livro Harry Potter', description: 'Livro Harry Potter e a Criança Amaldiçoada', discount: 12, image: 'https://photos.enjoei.com.br/livro-usado-harry-potter-e-a-crianca-amaldicoada-j-k-rowling-41438336/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82NTA0Ni8wODJkMmM1NGVmMmMyM2U2NzMzZDdkZTAwM2I2NTQ4ZC5qcGc', price: 25 },
    { title: 'Tenis Air Jordan', description: 'Tênis de basquete Air Jordan botinha', discount: 12, image: 'https://photos.enjoei.com.br/botinha-nike-jordan-1-promocao-numero-40-37779220/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83MDY1NjUxL2VjNzkwNjNlZWI4YTAzYzJlNTllODM0NzMyYjcwNjU4LmpwZw', price: 400 },
    { title: 'Jaqueta', description: 'Jaqueta de inverno', discount: 12, image: 'https://photos.enjoei.com.br/casaco-jaqueta-53912556/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8zMDUzMC9lMTVlZWNiYWVjYjVjMzE0MmM2MzI5NTBjYjczZWY2OC5qcGc', price: 120 },
    { title: 'Livro Anne de Green Gables', description: 'Livro Anne de Green Gables quase novo', discount: 10, image: 'https://photos.enjoei.com.br/livro-anne-de-green-gables-54070384/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy83NDY3ODY3LzViY2UzNDUyZGU4NzVhMzAwMTU3MDBjYTA2MzM4YTY5LmpwZw', price: 30 },
    { title: 'Smartphone Samsung A30', description: 'Celular Samsung, acompanha fone, carregador e caixa original', discount: 10, image: 'https://photos.enjoei.com.br/samsung-a30-novo-completo-54121671/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82MzM1NjQ3L2QxNWNmODA3ZGMxZThhZTU4NThiMjY2ZWVmN2UwMmMzLmpwZw', price: 950 },
    { title: 'Notebook Lenovo Ideapad', description: 'Notebook Lenovo, pouco tempo de uso', discount: 10, image: 'https://photos.enjoei.com.br/notebook-lenovo-s145-53745850/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy84ODYwNTE3L2QzNGU5NjA5MTI5MDg0YWFlN2ZiNGJlZWJlNGRjOTc5LmpwZw', price: 1800 },
    { title: 'Headphone JBL', description: 'Headphone Pure Bass JBL', discount: 10, image: 'https://photos.enjoei.com.br/fone-jbl-preto-54014416/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMzQyNzM2NS9mNjU4ZGYyZTE5ZDQ0ZmUwZTQzOTQxNWZlMzljOWNmYi5qcGc', price: 200 },
    { title: 'Gatinho', description: 'Um Gato Fofo', discount: 8, image: 'https://http.cat/100', price: 1000 },
]

export const NewProducts: Product[] = [
    {  title: 'Liquidificador Oster Vermelho', description: 'Liquidificador Oster na cor vermelha', image: 'https://photos.enjoei.com.br/liquidificador-vermelho-oster-110v-750-watts-54103976/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy82Mzk3NDg5LzQyMTNkZDBjMWE3NTUzMjBmNTZmYWY0NWIxMDI2ODQxLmpwZw', price: 380 },
    {  title: 'Honda Civic 2004', description: 'Vendo Honda Civic 2004, único dono', image: 'https://http2.mlstatic.com/D_NQ_NP_910624-MLB45502466852_042021-O.webp', price: 15000 },
    {  title: 'Jogos de PS3', description: '2 jogos de PlayStation 3 por R$70 cada', image: 'https://http2.mlstatic.com/D_NQ_NP_706497-MLB40724176480_022020-O.webp', price: 140 },
    {  title: 'Fone sem fio JBL', description: 'Fone sem fio JBL, quase novo', image: 'https://http2.mlstatic.com/D_NQ_NP_942150-MLB44986310521_022021-O.webp', price: 120 },
]