import React from 'react';
import { render, screen } from '@testing-library/react';
import { Home } from './Home';

describe('<Home />', () => {
  test('renders the child content within the Home component', () => {
    render(<Home />);
    const childContent = screen.getByText(/Some page content/);
    expect(childContent).toBeInTheDocument();
  });
});
