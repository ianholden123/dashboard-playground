import React from 'react';
import './button.css';

interface ButtonProps {
  backgroundColor?: string;
  classes?: string;
  label?: string;
  mode?: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  backgroundColor,
  classes,
  label = '',
  mode,
  onClick,
  size = 'medium',
}: ButtonProps) => {
  const modeClass = mode ? `button__${mode}` : '';
  const sizeClass = size ? `button__${size}` : '';
  const classNames = ['button', sizeClass, modeClass, classes].join(' ').trim();

  return (
    <button
      className={classNames}
      onClick={onClick}
      style={{ backgroundColor }}
      type="button"
    >
      {label}
    </button>
  );
};
