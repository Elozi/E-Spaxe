// components/common/LoadingSpinner.tsx
import { FC } from 'react';
import { LoadingSpinnerProps } from '../../interfaces';

const LoadingSpinner: FC<LoadingSpinnerProps> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`animate-spin rounded-full border-t-4 border-blue-600 ${sizeClasses[size]}`}
      role="status"
      aria-label="Loading"
    />
  );
};

export default LoadingSpinner;