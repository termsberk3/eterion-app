interface ProductCardProps {
    image?: string;
    price?: number;
    name?: string;
    id?: number;
    createdAt?: Date;
}
export const sortProducts = (products: ProductCardProps[], sortBy: 'oldest' | 'newest' | 'cheapest' | 'mostExpensive') => {
    const sortedProducts = [...products];

    sortedProducts.sort((a, b) => {
        if (sortBy === 'oldest') {
            return (a.createdAt && b.createdAt)
                ? new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
                : (a.createdAt ? -1 : (b.createdAt ? 1 : 0));
        } else if (sortBy === 'newest') {
            return (a.createdAt && b.createdAt)
                ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
                : (a.createdAt ? 1 : (b.createdAt ? -1 : 0));
        } else if (sortBy === 'cheapest') {
            return (a.price && b.price)
                ? a.price - b.price
                : (a.price ? -1 : (b.price ? 1 : 0));
        } else if (sortBy === 'mostExpensive') {
            return (a.price && b.price)
                ? b.price - a.price
                : (a.price ? 1 : (b.price ? -1 : 0));
        }
        return 0;
    });

    return sortedProducts;
};