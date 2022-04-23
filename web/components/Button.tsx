import React from 'react';
import { PlusSmIcon } from '@heroicons/react/solid';

interface ButtonProps {
  children: React.ReactNode;
  classNames?: string;
  icon?: 'plus' | 'x';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  classNames,
  icon,
}) => {
  return (
    <button
      type='button'
      className={`relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500 ${classNames}`}
    >
      {icon === 'plus' && (
        <PlusSmIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
      )}
      <span>{children}</span>
    </button>
  );
};
