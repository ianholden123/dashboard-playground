import React from 'react';
import { render, screen } from '@testing-library/react';
import { Layout } from './Layout';

describe('<Layout />', () => {
  test('renders a Layout component', () => {
    render(<Layout />);
    const layoutElement = screen.getByTestId('layout');
    expect(layoutElement).toBeInTheDocument();
  });

  describe('when we do supply children elements', () => {
    test('renders a Layout component with the children visible', () => {
      render(<Layout><>Hello there</></Layout>);
      const menuToggleElement = screen.getByText('Hello there');
      expect(menuToggleElement).toBeInTheDocument();
    });
  });
});
