import React from 'react';

const CardsContainer = ({
  children,
  className = '',
  ...props
}: React.AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`cards-container ${className}`} {...props}>
      {children}
    </div>
  );
};

export default CardsContainer;
