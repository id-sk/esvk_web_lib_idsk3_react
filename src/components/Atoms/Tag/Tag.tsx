import React, { ReactNode, ReactElement, SVGProps } from 'react';
import classNames from 'classnames';
import CheckIcon from '../../../svgIcons/Navigation/Check';
import CloseIcon from '../../../svgIcons/Navigation/Close';
import BaseButton from '../Button/BaseButton';

type TagVariant = 'default' | 'basic' | 'warning' | 'success' | 'attention';

type TagCustomColors = {
  border: string;
  background: string;
  color: string;
};

interface BaseTagProps extends React.HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  leftIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  rightIcon?: ReactElement<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  size?: 'small' | 'medium';
}

interface StaticTagProps extends BaseTagProps {
  type?: 'static';
  variant?: TagVariant;
  colors?: TagCustomColors;
}

interface SelectTagProps extends BaseTagProps {
  type?: 'select';
  variant?: 'default';
  selected?: boolean;
}

interface ActionTagProps extends BaseTagProps {
  type?: 'action';
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  variant?: TagVariant;
}

interface FilterTagProps extends BaseTagProps {
  type?: 'filter';
  variant?: 'default';
  selected?: boolean;
}

export type TagProps = SelectTagProps | StaticTagProps | ActionTagProps | FilterTagProps;

const Tag = (props: TagProps) => {
  const {
    label,
    leftIcon,
    rightIcon,
    size = 'medium',
    disabled = false,
    type = 'static',
    variant = 'default',
    className
  } = props;
  const { colors } = props as StaticTagProps;
  const { selected } = props as SelectTagProps;
  const { onClose = () => {} } = props as ActionTagProps;

  const getVariantClass = () => {
    if (type === 'static' || type === 'action') {
      return 'idsk-tag--' + variant;
    }
    return 'idsk-tag--default';
  };

  const getTagClasses = (): string => {
    if (disabled) return 'idsk-tag--disabled';

    return classNames(getVariantClass(), {
      'idsk-tag--with-interactions': type === 'filter' || type === 'select',
      'idsk-tag--selected': selected,
      'idsk-tag--small': size == 'small'
    });
  };

  return (
    <div
      className={classNames('idsk-tag', getTagClasses(), className)}
      tabIndex={type !== 'static' ? 0 : -1}
      {...(colors
        ? {
            style: {
              color: colors.color,
              backgroundColor: colors.background,
              borderColor: colors.border
            }
          }
        : {})}
      {...props}
    >
      {type === 'filter' && selected && <CheckIcon />}
      {leftIcon}
      {label}
      {rightIcon}
      {type === 'action' && (
        <BaseButton onClick={onClose}>
          <CloseIcon className="w-5 h-5" />
        </BaseButton>
      )}
    </div>
  );
};

export default Tag;
