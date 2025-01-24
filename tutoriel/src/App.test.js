import { render, screen } from '@testing-library/react';
import App from './App';
import Darryl from './Darryl';
import Formulaire from './Formulaire';

test('renders learn react link', () => {
  render(<Formulaire />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
