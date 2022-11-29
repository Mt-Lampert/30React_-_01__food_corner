import { describe, expect} from "vitest"
import { render, screen } from '@testing-library/react';
import Home from "./Home"

describe("Home", () => {
  beforeEach(() => {
    render(<Home></Home>)
  })

  it("has a home container", () => {
    const homeContainer = screen.getByTestId("home-container")
    expect(homeContainer).toBeInTheDocument();
  })

  it("has a header container", () => {
    const homeHeader = screen.getByTestId("home-hero")
    expect(homeHeader).toBeInTheDocument();
  })
})