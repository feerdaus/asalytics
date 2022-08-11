import Header from "@components/Header";
import Home from "@pages/index";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  it("renders home", () => {
    render(<Home />);
    const container = screen.getByTestId("home");
    expect(container).toBeInTheDocument();
  });

  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading", {
      name: /List of Algorand Standard Assets on ASAlytics/i,
    });

    const nav = screen.getByTestId("nav");
    expect(heading).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
