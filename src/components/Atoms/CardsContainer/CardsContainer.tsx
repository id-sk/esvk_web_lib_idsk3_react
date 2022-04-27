import React from 'react';

const CardsContainer = ({ children, ...props }: React.AllHTMLAttributes<HTMLDivElement>) => {
  return (
    <div className="grid grid-cols-1 gap-3" {...props}>
      {children}
    </div>
  );
};

export default CardsContainer;
