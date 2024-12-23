interface ProductCardProps {
    image?: string;
    price?: number;
    name?: string;
    id?: number;
    createdAt?: Date;
}
export const searchProducts = (products: ProductCardProps[], searchTerm: string): ProductCardProps[] => {
    if (!searchTerm) {
        return products; 
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return products.filter((product) =>
        product.name?.toLowerCase().includes(lowerCaseSearchTerm)
    );
};