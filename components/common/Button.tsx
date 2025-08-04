// components/common/Button.tsx
import { FC } from 'react';
import { ButtonProps } from '../../interfaces';

const Button: FC<ButtonProps> = ({ children, onClick, disabled, className }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400 ${className}`}
      aria-disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;