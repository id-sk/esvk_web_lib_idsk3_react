import React, {
  useState,
  useRef,
  Children,
  useEffect,
  ReactElement,
  SVGProps,
  ReactNode
} from 'react';
import classNames from 'classnames';

import { ArrowDropDownIcon } from '../../Icons/Navigation';

export interface DropDownProps extends React.AllHTMLAttributes<HTMLDivElement> {
  dropDownTitle?: ReactNode;
  arrowIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  optionClassName?: string;
}

const DropDown = ({
  dropDownTitle,
  className,
  children,
  arrowIcon = <ArrowDropDownIcon width="1.5rem" height="1.5rem" />,
  optionClassName,
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
    },
    optionClassName
  );

  const renderedChildren = Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return <li className="my-5 whitespace-nowrap first:mb-0 only:mb-5">{child}</li>;
    }
  });

  const renderedIcon = React.cloneElement(arrowIcon, {
    style: { transform: opened ? 'rotate(180deg)' : 'rotate(0)' }
  });

  return (
    <div ref={containerRef} {...props} className={`relative ${className}`}>
      <button
        className="flex items-center h-full w-full hover:underline gap-0.5 tracking-[inherit]"
        onClick={() => setOpened((p) => !p)}
      >
        <span>{dropDownTitle}</span>
        {renderedIcon}
      </button>
      <ul className={optionClasses} data-testid="dropdown-options">
        {renderedChildren}
      </ul>
    </div>
  );
};

export default DropDown;
