import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MenuItem from "./MenuItem";

describe("Menu Item", () => {
  beforeEach(() => {
    render(<MenuItem image="someImage.png" title="Some Title" price="99,99" />);
  });

  it("has a menu-item container", () => {
    const miContainer = screen.getByTestId("mi-container");
    expect(miContainer).toBeInTheDocument();
  });

  it("has an image", () => {
    const miImage = screen.getByAltText("Some Title image");
    expect(miImage).toBeInTheDocument();
  });

  it("has a title", () => {
    const miTitle = screen.getByRole("heading", { name: "Some Title" });
  });

  it("has a price", () => {
    const miPrice = screen.getByText(/99,99/);
    expect(miPrice).toBeInTheDocument();
  });
});
