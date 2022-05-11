import React from 'react';

const CardsContainer = ({
  children,
  className = '',
  ...props
}: React.AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`grid grid-cols-1 gap-3 ${className}`} {...props}>
      {children}
    </div>
  );
};

export default CardsContainer;
