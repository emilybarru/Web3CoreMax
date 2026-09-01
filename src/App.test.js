// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Web3CoreMax title', () => {
    render(<App />);
    const titleElement = screen.getByText(/Web3CoreMax/i);
    expect(titleElement).toBeInTheDocument();
});
