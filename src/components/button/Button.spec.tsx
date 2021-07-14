import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  test('renders a button component', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  })

  test('renders a button component with the given text label', () => {
    render(<Button label="Here is my label" />);
    const buttonElement = screen.getByText('Here is my label');
    expect(buttonElement).toBeInTheDocument();
  })
})