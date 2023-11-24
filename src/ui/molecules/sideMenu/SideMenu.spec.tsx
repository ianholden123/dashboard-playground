import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideMenu } from './SideMenu';

describe('<SideMenu />', () => {
  describe('when we have a few menu items', () => {
    beforeEach(() => {
      render(<SideMenu />);
    });

    test('renders a sideMenu component with three menu items', () => {
      const menuItemElements = screen.getAllByTestId('side-navigation-list-item');
      expect(menuItemElements).toHaveLength(3);
    });

    test('renders a sideMenu component containing the first menu item', () => {
      const menuItemElement = screen.getByText('Menu Item 1');
      expect(menuItemElement).toBeInTheDocument();
    });

    test('renders a sideMenu component containing the second menu item', () => {
      const menuItemElement = screen.getByText('Menu Item 2');
      expect(menuItemElement).toBeInTheDocument();
    });

    test('renders a sideMenu component containing the third menu item', () => {
      const menuItemElement = screen.getByText('Menu Item 3');
      expect(menuItemElement).toBeInTheDocument();
    });
  });
});
