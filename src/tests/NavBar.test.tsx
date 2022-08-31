import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar';

describe('Navigation bar', () => {
  it('displays on screen', () => {
    render(<NavBar />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toMatch(/wishlist shoppe/i);
  });
});
