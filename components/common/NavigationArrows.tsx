// components/common/NavigationArrows.tsx
import { FC } from 'react';
import { ChevronLeft, ChevronRight, Grid3X3 } from 'lucide-react';
import { NavigationArrowsProps } from '../../interfaces';
import { UI_TEXT } from '../../constants';

const NavigationArrows: FC<NavigationArrowsProps> = ({ onPrevious, onNext, onViewAll }) => {
  return (
    <div className="flex items-center gap-2" role="navigation" aria-label="New arrivals navigation">
      <button
        onClick={onPrevious}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Previous new arrivals"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={onViewAll}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label={UI_TEXT.VIEW_ALL}
      >
        <Grid3X3 className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={onNext}
        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
        aria-label="Next new arrivals"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>
    </div>
  );
};

export default NavigationArrows;