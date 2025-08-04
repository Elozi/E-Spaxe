// components/common/Card.tsx
import { FC } from 'react';
import { CardProps } from '../../interfaces';
import Button from './Button';
import { UI_TEXT } from '../../constants';

const Card: FC<CardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded"
        loading="lazy"
      />
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <div className="mt-4 flex gap-2">
        <Button>{UI_TEXT.BUY_NOW}</Button>
        <Button>{UI_TEXT.VIEW_DETAILS}</Button>
      </div>
    </div>
  );
};

export default Card;