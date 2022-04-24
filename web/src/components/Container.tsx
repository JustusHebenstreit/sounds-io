import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8'>{children}</div>
  );
};
