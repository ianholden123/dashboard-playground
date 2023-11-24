import React from 'react';
import { render, screen } from '@testing-library/react';
import { Icons } from './Icons';

describe('<Icons />', () => {
  describe('Icons should render the correct components', () => {
    test('renders a React icon', () => {
      render(<Icons name="React" />);
      const iconElement = screen.getByTestId('react-icon');
      expect(iconElement).toBeInTheDocument();
    });
    test('renders an Email icon', () => {
      render(<Icons name="Email" />);
      const iconElement = screen.getByTestId('email-icon');
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe('Icons should render an icon in the specified size', () => {
    test('renders a small React icon if a size is not specified', () => {
      render(<Icons name="React" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--small');
    });

    test('renders a tiny React icon if a size of tiny is specified', () => {
      render(<Icons name="React" size="tiny" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--tiny');
    });

    test('renders a small React icon if a size of small is specified', () => {
      render(<Icons name="React" size="small" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--small');
    });

    test('renders a medium React icon if a size of medium is specified', () => {
      render(<Icons name="React" size="medium" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--medium');
    });

    test('renders a large React icon if a size of large is specified', () => {
      render(<Icons name="React" size="large" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--large');
    });
  });

  describe('Icons should render an icon in the specified mode', () => {
    test('renders a React icon with the primary mode set if not specified', () => {
      render(<Icons name="React" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--primary');
    });

    test('renders a React icon with the primary mode set if specified', () => {
      render(<Icons name="React" mode="primary" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--primary');
    });

    test('renders a React icon with the secondary mode set if specified', () => {
      render(<Icons name="React" mode="secondary" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--secondary');
    });

    test('renders a React icon with the tertiary mode set if specified', () => {
      render(<Icons name="React" mode="tertiary" />);
      const iconElement = screen.getByTestId('icon-wrapper');
      expect(iconElement).toHaveClass('icon--tertiary');
    });
  });
});
