import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
// import { MemoryRouter } from 'react-router-dom';
import Navbar from "./Navbar";
// import { ContextWrapper } from "./ContextWrapper";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar></Navbar>, { wrapper: Router });
  });

  it("has a navbar-end container", () => {
    // render(<Navbar></Navbar>)
    const rightSide = screen.getByTestId("navbar-end");
    expect(rightSide).toBeInTheDocument();
  });


  it("has a logo", () => {
    const logoImg = screen.getByAltText("The Logo");
    expect(logoImg).toBeInTheDocument();
  });
});
