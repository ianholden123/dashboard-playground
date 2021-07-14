import React from 'react';
import './button.css';

interface ButtonProps {
  backgroundColor?: string;
  label?: string;
  mode?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  backgroundColor,
  label = '',
  mode,
  onClick,
  size = 'medium',
}: ButtonProps) => {
  const modeClass = mode && `button--${mode}`;

  return (
    <button
      className={['button', `button--${size}`, modeClass].join(' ')}
      onClick={onClick}
      style={{ backgroundColor }}
      type="button"
    >
      {label}
    </button>
  );
};
