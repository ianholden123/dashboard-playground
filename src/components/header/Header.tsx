import React from 'react';
import './header.css';
import Icon from '../icons/Icons';
import { Button } from '../button/Button';

export const Header = () => {
  return (
    <header className="header bg-secondary">
      <div className="header__brand">
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
