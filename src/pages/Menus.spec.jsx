import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Menus from "./Menus";

describe("Menus Page", () => {
  beforeEach(() => {
    render(<Menus />);
  });

  it("has a title", () => {
    const menuTitle = screen.getByRole("heading", { name: "Our Dishes" });
    expect(menuTitle).toBeInTheDocument();
  });

  it("has a menus container", () => {
    const menuContainer = screen.getByTestId("menu-container");
    expect(menuContainer).toBeInTheDocument();
  });

  it("has a number of menu items", () => {
    const menuItems = screen.getAllByTestId("mi-container");
    expect(menuItems.length).toBe(6);
    const masalaDosa = screen.getByRole("heading", { name: "Masala Dosa" });
    expect(masalaDosa).toBeInTheDocument();
  });
});
