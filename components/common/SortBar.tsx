import { FC } from 'react';
import { SortBarProps } from '../../interfaces';

const SortBar: FC<SortBarProps> = ({ onSortChange }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Sort By</h3>
      <select
        onChange={(e) => onSortChange(e.target.value as 'price-asc' | 'price-desc')}
        className="border rounded p-2"
      >
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default SortBar;