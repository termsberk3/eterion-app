
import CartItem from './CartItem';

import React from 'react';
import { useAppSelector } from '../redux/store';
import TotalPrice from './TotalCheckout';

const Cart: React.FC = () => {
  const { items } = useAppSelector((state) => state.cart);
  
  return (
    <div className="w-[213] h-[143] flex flex-col justify-between items-center mb-4 border-b border-gray-200 pb-4">
      {items.map((item) => (
        <CartItem
          id={item.id}
          key={item.id}
          name={item.name}
          price={item.totalPrice}
          quantity={item.quantity}
        />
      ))}
      <div className="mt-4">
        <p className="text-center text-gray-700 font-montserrat text-normal font-bold">
          Total Price: <span className="text-blue-500"><TotalPrice /> </span>
        </p>
      </div>
      <div className="mt-4">
        <p className="text-center font-montserrat text-normal font-bold">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
        </p>

      </div>
    </div>
  );
};

export default Cart;