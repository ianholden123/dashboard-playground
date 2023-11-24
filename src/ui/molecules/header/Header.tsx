import React from 'react';
import './header.css';
import { Icons } from 'ui/atoms/icons';
import { Button } from 'ui/atoms/button';
import { MenuToggle } from 'ui/atoms/menuToggle';

interface HeaderProps {
  isMenuToggleOpen?: boolean,
  setIsMenuToggleOpen?: () => void,
}

export const Header = ({
  isMenuToggleOpen = false,
  setIsMenuToggleOpen,
}: HeaderProps) => {
  return (
    <header className="header bg-secondary" data-testid="header">
      <div className="header__brand">
        {setIsMenuToggleOpen ? (
          <MenuToggle classes="mx-2" isOpen={isMenuToggleOpen} onClick={setIsMenuToggleOpen} />
        ): (
          <></>
        )}
        <Icons name="React" />
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
