// components/common/CategoryCard.tsx
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { ShoppingBag } from 'lucide-react';
import { Category } from '../../interfaces';
import {  UI_TEXT } from "../../constants"

interface CategoryCardProps {
  category: Category;
  index: number;
}

const CategoryCard: FC<CategoryCardProps> = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleShopNow = () => {
    router.push(`/catalog?category=${category.slug}`);
  };

  const getCardStyle = (name: string) => {
    switch (name.toLowerCase()) {
      case 'necklaces':
        return 'bg-gradient-to-br from-pink-100 to-pink-200';
      case 'earrings':
        return 'bg-gradient-to-br from-amber-50 to-amber-100';
      case 'bracelets':
        return 'bg-gradient-to-br from-rose-100 to-rose-200';
      case 'rings':
        return 'bg-gradient-to-br from-purple-100 to-purple-200';
      default:
        return 'bg-gradient-to-br from-gray-100 to-gray-200';
    }
  };

  return (
    <div
      className={`relative h-96 overflow-hidden cursor-pointer group ${getCardStyle(category.name)}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      aria-label={`Shop ${category.name}`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
      </div>
      <div className="relative h-full flex flex-col justify-center items-center text-white z-10">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wider mb-4">{category.name}</h3>
        <div
          className={`transition-all duration-300 transform ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleShopNow}
            className="bg-white text-gray-900 px-8 py-3 font-semibold tracking-wider hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 group"
            aria-label={`Shop ${category.name} now`}
          >
            <span>{UI_TEXT.BUY_NOW}</span>
            <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-60' : 'opacity-30'
        }`}
      />
    </div>
  );
};

export default CategoryCard;