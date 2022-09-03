import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';

describe('Browser Router navigation', () => {
  afterEach(cleanup);
  beforeEach(() => {
    // Renders app and defaults to home page for each test
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
    const homeLink = screen.getByTestId('home-link');
    userEvent.click(homeLink);
  });
  it('renders homepage by default', () => {
    const [aboutBtn, shopBtn] = screen.getAllByRole('button');
    expect(aboutBtn.textContent).toMatch(/learn more about our team/i);
    expect(shopBtn.textContent).toMatch(/check out the goods/i);
  });
  it('renders about page on nav link click', () => {
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    const aboutParagraph = screen.getByTestId('about-paragraph');
    expect(aboutParagraph).toBeInTheDocument();
  });
  it('renders about page on homepage button click', () => {
    const [aboutBtn] = screen.getAllByRole('button');
    userEvent.click(aboutBtn);
    const aboutParagraph = screen.getByTestId('about-paragraph');
    expect(aboutParagraph).toBeInTheDocument();
  });
  it('renders shop page on nav link click', () => {
    const shopLink = screen.getByTestId('shop-link');
    userEvent.click(shopLink);
    const shopContainer = screen.getByTestId('shop-container');
    expect(shopContainer).toBeInTheDocument();
  });
  it('renders shop page on homepage button click', () => {
    const [, shopBtn] = screen.getAllByRole('button');
    userEvent.click(shopBtn);
    const shopContainer = screen.getByTestId('shop-container');
    expect(shopContainer).toBeInTheDocument();
  });
  it('renders all pages throughout multiple switches', () => {
    const [aboutBtn, shopBtn] = screen.getAllByRole('button');
    userEvent.click(aboutBtn);
    const aboutParagraph = screen.getByTestId('about-paragraph');
    expect(aboutParagraph).toBeInTheDocument();
    const shopLink = screen.getByTestId('shop-link');
    userEvent.click(shopLink);
    const shopContainer = screen.getByTestId('shop-container');
    expect(shopContainer).toBeInTheDocument();
    const homeLink = screen.getByTestId('home-link');
    userEvent.click(homeLink);
    expect(aboutBtn.textContent).toMatch(/learn more about our team/i);
    expect(shopBtn.textContent).toMatch(/check out the goods/i);
  });
});
