import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Home", () => {
  beforeEach(() => {
    render(<Home></Home>, { wrapper: Router });
  });

  it("has a home container", () => {
    const homeContainer = screen.getByTestId("home-container");
    expect(homeContainer).toBeInTheDocument();
  });

  it("has a header container", () => {
    const homeHeader = screen.getByTestId("home-hero");
    expect(homeHeader).toBeInTheDocument();
  });

  it("has an 'Order' call-to-action button", () => {
    const cta = screen.getByRole("button", { name: "Order Now!" });
    expect(cta).toBeInTheDocument();
    // await
  });
});

describe("Home CTA", () => {
  it("has a call-to-action button leading to the catalog", async () => {
    userEvent.setup();
    render(<Home />, { wrapper: Router });
    // const cta = screen.getByRole("button", {name: "Order Now!"})
    const cta = screen.getByRole("link");
    expect(cta).toBeInTheDocument();

    await userEvent.click(cta);
    setTimeout(() => {
      const menuC = screen.getByTestId("menu-container");
      expect(menuC).toBeInTheDocument();
    }, 100);
  });
});
