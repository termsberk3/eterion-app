
import CartItem from './CartItem';

import React from 'react';
import { useAppSelector } from '../redux/store';

const Cart: React.FC = () => {
  const { items } = useAppSelector((state) => state.cart);

  return (
<div className="w-[213] h-[143] flex flex-col justify-between items-center mb-4 border-b border-gray-200 pb-4">
{items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.totalPrice}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default Cart;