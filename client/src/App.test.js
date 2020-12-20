import { render, screen } from '@testing-library/react';
import App from './App';

describe('renders learn react link', () => {
  it("renders <App/> component correctly",() =>{
    const {getByText}= render(<App />);
    expect(getByText(/Getting Started with React testing library/i)).toBeInTheDocument();
  })
});
