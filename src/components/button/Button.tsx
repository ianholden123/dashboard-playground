import React from 'react';
import './button.css';

interface ButtonProps {
  mode?: 'primary' | 'secondary' | 'tertiary';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export const Button = ({
  mode,
  size = 'medium',
  backgroundColor,
  label = '',
  ...props
}: ButtonProps) => {
  const modeClass = mode && `button--${mode}`;
  return (
    <button
      type="button"
      className={['button', `button--${size}`, modeClass].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
