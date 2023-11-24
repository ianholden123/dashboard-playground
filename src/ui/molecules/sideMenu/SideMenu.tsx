import React from 'react';
import './sideMenu.css';

interface SideMenuProps {
  classes?: string
  open?: boolean
}

const menuItems = [
  'Menu Item 1',
  'Menu Item 2',
  'Menu Item 3',
];

export const SideMenu = ({
  open,
}: SideMenuProps) => {
  const openClass = open ? '--open' : '';
  const classNames = ['side-navigation', 'bg-primary', 'c-white', openClass].join(' ').trim();

  return (
    <nav className={classNames} data-testid="side-navigation">
      {menuItems.length ? (
        <ul className="side-navigation__list" data-testid="side-navigation-list">
          {menuItems.map((item, i) => (
            <li
              key={i}
              className="side-navigation__list-item"
              data-testid="side-navigation-list-item"
            >
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
};
