'use client';

import classNames from 'classnames';

interface ButtonProps {
  borderColor?: string;
  borderRadius?: string;
  className?: string;
  onClick?: () => void;
  selected?: boolean;
  text: string;
  textColor?: string;
  textSize?: string;
  variant?: 'primary' | 'outlined' | 'active' | 'disabled';
}

function Button({
  borderColor,
  borderRadius,
  className,
  onClick,
  selected,
  text,
  textColor,
  textSize,
  variant,
}: ButtonProps) {
  const backgroundColor =
    variant === 'disabled'
      ? '#c0c0c0'
      : variant === 'active'
      ? '#34aa70'
      : '#fff';

  return (
    <button
      className={classNames(className, 'w-full bg-white', selected)}
      onClick={onClick}
      style={{
        backgroundColor,
        border: variant === 'outlined' ? '1px solid' : '',
        borderColor,
        borderRadius,
        color: textColor,
        fontSize: textSize,
      }}
      type="button"
    >
      {text}
    </button>
  );
}

export default Button;
