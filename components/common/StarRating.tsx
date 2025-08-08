// components/common/StarRating.tsx
import { FC } from 'react';
import { Star } from 'lucide-react';
import { StarRatingProps } from '../../interfaces';

const StarRating: FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex gap-1" role="img" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default StarRating;