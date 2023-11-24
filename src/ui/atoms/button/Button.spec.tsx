import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('<Button />', () => {
  test('renders a button component', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  describe('Component adds the given background colour correctly', () => {
    test('renders a button component without a background colour applied', () => {
      render(<Button />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).not.toHaveStyle('background-color: #002200');
    });
    test('renders a button component with a background colour applied', () => {
      render(<Button backgroundColor="#002200" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveStyle('background-color: #002200');
    });
  });

  describe('Component adds the given classes correctly', () => {
    test('renders a button component with an additional class applied', () => {
      render(<Button classes="some-class" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('some-class');
    });

    test('renders a button component with multiple additional classes applied', () => {
      render(<Button classes="some-class another-class" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('some-class another-class');
    });
  });

  describe('Component adds the supplied label text correctly', () => {
    test('renders a button component without a given text label', () => {
      render(<Button />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveTextContent('');
    });
    test('renders a button component with the given text label', () => {
      render(<Button label="Here is my label" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveTextContent('Here is my label');
    });
  });

  describe('Component adds the supported mode classes correctly', () => {
    test('renders a button component without a mode applied', () => {
      render(<Button />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).not.toHaveClass('button__primary');
      expect(buttonElement).not.toHaveClass('button__secondary');
      expect(buttonElement).not.toHaveClass('button__tertiary');
    });
    test('renders a button component with the primary mode applied', () => {
      render(<Button mode="primary" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__primary');
    });
    test('renders a button component with the secondary mode applied', () => {
      render(<Button mode="secondary" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__secondary');
    });
    test('renders a button component with the tertiary mode applied', () => {
      render(<Button mode="tertiary" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__tertiary');
    });
  });

  describe('Component adds the supplied onClick function correctly', () => {
    test('renders a button component with the given onClick handler', () => {
      const mockCallBack = jest.fn();
      render(<Button onClick={mockCallBack} />);
      const buttonElement = screen.getByRole('button');
      fireEvent.click(buttonElement);
      expect(mockCallBack).toHaveBeenCalled();
    });
  });

  describe('Component adds the supported size classes correctly', () => {
    test('renders a button component without a size applied', () => {
      render(<Button />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__medium');
      expect(buttonElement).not.toHaveClass('button__small');
      expect(buttonElement).not.toHaveClass('button__large');
    });
    test('renders a button component with the primary mode applied', () => {
      render(<Button size="small" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__small');
    });
    test('renders a button component with the secondary mode applied', () => {
      render(<Button size="medium" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__medium');
    });
    test('renders a button component with the tertiary mode applied', () => {
      render(<Button size="large" />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('button__large');
    });
  });
});
