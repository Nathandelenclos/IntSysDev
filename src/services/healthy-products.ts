import healthyProductsData from '@/data/healthy-products.json';
import { Product, ProductCategory, HealthyProductsData } from '@/types/healthy-products';

const data = healthyProductsData as HealthyProductsData;

export const getProducts = (): Product[] => {
    return data.products;
};

export const getCategories = () => {
    return data.categories;
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
    if (category === 'all') {
        return data.products;
    }
    return data.products.filter(product => product.category === category);
};

export const getProductById = (id: number): Product | undefined => {
    return data.products.find(product => product.id === id);
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
    return data.products.slice(0, count);
};

export const getProductsByPriceRange = (minPrice: number, maxPrice: number): Product[] => {
    return data.products.filter(product => {
        const price = parseFloat(product.price.replace('€', ''));
        return price >= minPrice && price <= maxPrice;
    });
};

export const getProductsByCalories = (maxCalories: number): Product[] => {
    return data.products.filter(product => product.calories <= maxCalories);
};

export const getHighProteinProducts = (minProtein: number = 15): Product[] => {
    return data.products.filter(product => product.protein >= minProtein);
}; 