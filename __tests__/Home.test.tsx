// index.test.js

import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home", () => {
  it('renders "Docs" text on the Home page', () => {
    render(<Home />);

    const docsText = screen.getByText("Docs");

    expect(docsText).toBeInTheDocument();
  });

  it('renders "Docs" text on the Home page', () => {
    render(<Home />);

    const docsText = screen.getByText("Docs");

    expect(docsText).toBeInTheDocument();
  });
});
