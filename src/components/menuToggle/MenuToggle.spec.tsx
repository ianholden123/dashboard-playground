import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MenuToggle } from './MenuToggle';

describe('<MenuToggle />', () => {
  test('renders a menuToggle component', () => {
    render(<MenuToggle />);
    const menuToggleElement = screen.getByRole('button');
    expect(menuToggleElement).toBeInTheDocument();
  });

  describe('Component adds the given classes correctly', () => {
    test('renders a menuToggle component with an additional class applied', () => {
      render(<MenuToggle classes="some-class" />);
      const menuToggleElement = screen.getByRole('button');
      expect(menuToggleElement).toHaveClass('some-class');
    });

    test('renders a menuToggle component with multiple additional classes applied', () => {
      render(<MenuToggle classes="some-class another-class" />);
      const menuToggleElement = screen.getByRole('button');
      expect(menuToggleElement).toHaveClass('some-class another-class');
    });
  });

  describe('Component adds the supplied onClick function correctly', () => {
    test('renders a menuToggle component with the given onClick handler', () => {
      const mockCallBack = jest.fn();
      render(<MenuToggle onClick={mockCallBack} />);
      const menuToggleElement = screen.getByRole('button');
      fireEvent.click(menuToggleElement);
      expect(mockCallBack).toHaveBeenCalled();
    });
  });
});
