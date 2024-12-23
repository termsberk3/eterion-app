import React from 'react';

interface ProductCardProps {
  image?: string;
  price?: number;
  name?: string;
  id?: number;
}

const ProductItems: React.FC<ProductCardProps> = ({ image, price, name }) => {
  return (
    <div className="w-[45] h-[75]"> 
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <p className="text-lg font-semibold">{price} ₺</p>
          <h3 className="text-base font-medium mt-2">{name}</h3>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItems