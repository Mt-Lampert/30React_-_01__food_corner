import { describe, expect, render, screen } from "vitest"
import Home from "./Home"

describe("Home", () => {
  beforeEach(() => {
    render(<Home></Home>)
  })

  it("has a home container", () => {
    const homeContainer = screen.getByTestID("home-container")
    expect(homeContainer).toBeInTheDocument();
  })

  it("hase home header", () => {
    const homeHeader = screen.getByTestID("home-headder")
    expect(homeHeader).toBeInTheDocument();
  })
})