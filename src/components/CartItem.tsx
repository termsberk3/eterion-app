import React from 'react';

interface CartItemProps {
    name: string;
    price: number;
    quantity: number;
    onIncrease?: () => void;
    onDecrease?: () => void;
}

const CartItem: React.FC<CartItemProps> = ({ name, price, quantity, onIncrease, onDecrease }) => {
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
                    onClick={onDecrease}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-l-md"
                    disabled={quantity === 0}
                >
                    -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={onIncrease}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default CartItem;