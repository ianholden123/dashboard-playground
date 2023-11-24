import React from 'react';
import './menuToggle.css';

interface MenuToggleProps {
  classes?: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuToggle = ({
  classes,
  isOpen = false,
  onClick,
}: MenuToggleProps) => {
  const openClass = isOpen ? '__open' : '';
  const classNames = ['menuToggle', openClass, classes].join(' ').trim();

  return (
    <button
      className={classNames}
      data-testid="menuToggle"
      onClick={onClick}
      type="button"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
