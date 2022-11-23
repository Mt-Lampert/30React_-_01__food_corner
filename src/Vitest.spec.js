import { describe, it, expect } from "vitest";

describe("Vitest", () => {
  it("asserts true to be true", () => {
    expect(true).toBe(true)
  })

  it("asserts false to be false", () => {
    expect(false).not.toBe(true)
  })
})