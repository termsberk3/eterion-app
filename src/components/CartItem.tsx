import React from 'react';
import { useAppDispatch } from '../redux/store';
import { cartActions } from '../redux/reducers/cart-slice';

interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    handleIncrease?: () => void;
    handleDecrease?: () => void;
    id: number;
}


const CartItem: React.FC<CartItemProps> = ({ name, price, quantity,id }) => {
    const dispatch = useAppDispatch()

    const handleIncrease = () => {
        dispatch(cartActions.increaseItemQuantity(id));
    };

    const handleDecrease = () => {
        dispatch(cartActions.decreaseItemQuantity(id));
    };
    return (
        <div className="w-[213] h-[143] flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
            <div className="flex flex-col">
                <span className="text-base font-medium">{name}</span>
                <span className="text-gray-500">{new Intl.NumberFormat('tr-TR', {
                    style: 'currency',
                    currency: 'TRY',
                }).format(price)}</span>
            </div>
            <div className="flex items-center">
                <button
                    onClick={handleDecrease}
                    className="bg-white hover:bg-gray-300 text-black font-bold py-2 px-4 rounded-l-md"
                    disabled={quantity === 0}
                >
                    -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={handleIncrease}
                    className="bg-white hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-r-md"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;