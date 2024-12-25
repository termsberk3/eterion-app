import React from 'react';
import { cartActions } from '../redux/reducers/cart-slice';
import { useAppDispatch } from '../redux/store';

import { LazyLoadImage } from "react-lazy-load-image-component";


interface ProductItemProps {
  image: string;
  price: number;
  name: string;
  id: number;
}

const ProductItems: React.FC<ProductItemProps> = ({ image, price, name, id }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
        quantity: 1,
        totalPrice: price
      })
    );
  };

  return (
    <div className="w-[16rem] h-[75]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {image && <LazyLoadImage  src={image} alt={name || ''} className="w-full h-48 object-cover" />}
        <div className="p-4">
          <p className="text-lg font-semibold">{price ? `${price} ₺` : 'N/A'}</p>
          <h3 className="text-base font-medium mt-2">{name}</h3>
          <button
            onClick={handleAddToCart}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems;