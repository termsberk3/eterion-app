import React, { FC } from 'react';
import { useAppSelector } from '../redux/store';

interface CartItem {
    price: number;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const TotalPrice: FC = () => {
    const { items }: CartState = useAppSelector((state) => state.cart);

    const calculateTotalPrice = (): number => {
        return items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
    };

    const totalPrice: number = calculateTotalPrice();

    return (
        <span>{new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(totalPrice)}</span>

    );
};

export default TotalPrice;