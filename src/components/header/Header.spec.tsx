import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('<Header />', () => {
  test('renders a header component', () => {
    render(<Header />);
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  describe('when we do not supply a setIsMenuOpen prop', () => {
    test('renders a header component without a menu toggle', () => {
      render(<Header />);
      const menuToggleElement = screen.queryByTestId('menuToggle');
      expect(menuToggleElement).not.toBeInTheDocument();
    });
  });

  describe('when we supply a setIsMenuOpen prop', () => {
    test('renders a header component with a menu toggle', () => {
      render(<Header setIsSideMenuOpen={jest.fn()} />);
      const menuToggleElement = screen.getByTestId('menuToggle');
      expect(menuToggleElement).toBeInTheDocument();
    });
  });
});
