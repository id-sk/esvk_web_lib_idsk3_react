import React, { useState, useRef, Children, useEffect, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';

import { ArrowDropDownIcon } from '../../Icons/Navigation';

export interface DropDownProps extends React.AllHTMLAttributes<HTMLDivElement> {
  title?: string;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
}

const DropDown = ({
  title,
  className,
  children,
  arrowIcon = <ArrowDropDownIcon width="1.5rem" height="1.5rem" />,
  ...props
}: DropDownProps) => {
  const [opened, setOpened] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | null) {
      if (
        event?.target instanceof Node &&
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpened(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [containerRef]);

  const optionClasses = classNames(
    'absolute top-full rounded-md bg-white shadow-medium text-body-1 text-black px-5',
    {
      hidden: !opened
    }
  );

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return <li className="my-5">{child}</li>;
    }
  });

  const renderedIcon = React.cloneElement(arrowIcon, {
    style: { transform: opened ? 'rotate(180deg)' : 'rotate(0)' }
  });

  return (
    <div ref={containerRef} {...props} className={`relative ${className}`}>
      <button
        className="flex items-center h-100 w-100 hover:underline gap-0.5"
        onClick={() => setOpened((p) => !p)}
      >
        <span>{title}</span>
        {renderedIcon}
      </button>
      <ul className={optionClasses} data-testid="dropdown-options">
        {renderedChildren}
      </ul>
    </div>
  );
};

export default DropDown;
