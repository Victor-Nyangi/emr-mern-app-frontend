// whether the fruit list includes 3 items,
// whether the h1 tag exists,
// whether the span tag contains the sum of variables a and b.
import {render, screen} from '@testing-library/react';
import NotFound from '../pages/NotFound';
import {BrowserRouter } from "react-router-dom"
test('should render 3 list items', () => {
    render(<BrowserRouter><NotFound /></BrowserRouter>);
    // screen object represents the entire HTML document in the rendered component.
    const listitems = screen.getAllByRole("listitem");
    // const input = screen.getByLabelText('Username')
    expect(listitems).toHaveLength(3); //compare the result using Jest
    // expect gives you access to a number of "matchers" that let you validate different things

  });

test('title should be rendered', () => {
  render(<NotFound />, {wrapper: BrowserRouter});
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();
});

test('sum should be 17', () => {
  render(<NotFound />, {wrapper: BrowserRouter});
  const sum = screen.getByTitle("sum");
  expect(sum).toHaveTextContent("17");
  expect(sum.textContent).toBe("17");
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
