import ASACard from "@components/ASACard";
import Header from "@components/Header";
import Home from "@pages/index";
import { render, screen } from "@testing-library/react";

const mockData = {
  name: "PLANET",
  available: false,
  logo: "https://algorand-wallet-mainnet.s3.amazonaws.com/media/asset_verification_requests_logo_svg/2022/06/10/6b08601da44c4f72bc71a007a0781f34.svg",
};

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

  it("renders ASAlist", () => {
    render(
      <ASACard
        name={mockData.name}
        logo={mockData.logo}
        available={mockData.available}
      />
    );

    const logo = screen.getByAltText(`${mockData.name} logo`);
    expect(logo).toBeInTheDocument();
  });
});
