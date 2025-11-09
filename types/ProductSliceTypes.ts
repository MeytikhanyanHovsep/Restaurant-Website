export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    ingredients: string[];
    rating: number;
    weight: number;
    isFavourite?: boolean;
}

export interface ProductsState {
    products: Product[] | null;
    search: Product[] | null;
    bestProducts: Product[] | null;
    product: null | Product;
}
