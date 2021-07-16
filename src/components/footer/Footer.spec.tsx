import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('<Footer />', () => {
  test('renders a footer component', () => {
    render(<Footer />);
    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });
});
