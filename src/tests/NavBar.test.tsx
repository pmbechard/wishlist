import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import NavBar from '../components/NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('Navigation bar', () => {
  it('displays on screen', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    );
    const heading = screen.getByRole('heading');
    expect(heading.textContent).toMatch(/wishlist shoppe/i);
  });
});
