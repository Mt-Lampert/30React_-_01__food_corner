import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer></Footer>);
  });

  it("has a footer container", () => {
    const footerContainer = screen.getByTestId("footer-container");
    expect(footerContainer).toBeInTheDocument();
  });

  it("has a social-media container", () => {
    const footerContainer = screen.getByTestId("socialMedia-container");
    expect(footerContainer).toBeInTheDocument();
  });

  it("has a copyright container", () => {
    const copyrightContainer = screen.getByTestId("copyright-container");
    expect(copyrightContainer).toBeInTheDocument();
  });
});
