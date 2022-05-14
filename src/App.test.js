// src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title element", () => {
  render(<App />);
  const titleElement = screen.getAllByText(/Gonzalo Lobos/i)[0];
  expect(titleElement).toBeInTheDocument();
});
