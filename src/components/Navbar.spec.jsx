import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar></Navbar>)
  })

  it("has a right side container", () => {
    // render(<Navbar></Navbar>)
    const rightSide = screen.getByTestId("right-side")
    expect(rightSide).toBeInTheDocument()
  })

  it("has a left side container", () => {
    // render(<Navbar></Navbar>)
    const rightSide = screen.getByTestId("left-side")
    expect(rightSide).toBeInTheDocument()
  })

  it("has a logo", () => {
    const logoImg = screen.getByAltText("The Logo")
    expect(logoImg).toBeInTheDocument() 
  })


})