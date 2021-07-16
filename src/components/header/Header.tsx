import React from 'react';
import './header.css';
import Icon from '../icons/Icons';
import { Button } from '../button/Button';
import { MenuToggle } from '../menuToggle/MenuToggle';

interface HeaderProps {
  isSideMenuOpen?: boolean,
  setIsSideMenuOpen?: () => void,
}

export const Header = ({
  isSideMenuOpen = false,
  setIsSideMenuOpen,
}: HeaderProps) => {
  return (
    <header className="header bg-secondary c-white" data-testid="header">
      <div className="header__brand">
        {setIsSideMenuOpen ? (
          <MenuToggle classes="mx-2" isOpen={isSideMenuOpen} onClick={setIsSideMenuOpen} />
        ): (
          <></>
        )}
        <Icon name="React" />
        <span className="mx-2">Dashboard Playground</span>
      </div>
      <div className="ta-right">
        <Button
          classes="m-2"
          label="Log In"
          onClick={() => console.log('I would take you to a log in screen, but this is a demo.')}
        />
        <Button
          classes="m-2"
          label="Sign Up"
          mode="primary"
          onClick={() => console.log('I would take you to a sign up screen, but this is a demo.')}
        />
      </div>
    </header>
  );
};
