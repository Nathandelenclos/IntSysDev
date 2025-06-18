export interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    category: 'smoothie' | 'shake' | 'snack';
    image: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
    ingredients: string[];
    benefits: string[];
}

export interface Category {
    key: string;
    label: string;
    description: string;
}

export interface HealthyProductsData {
    products: Product[];
    categories: Category[];
}

export type ProductCategory = 'all' | 'smoothie' | 'shake' | 'snack'; 