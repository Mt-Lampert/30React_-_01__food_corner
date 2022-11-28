// import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe("App", () => {
  it("has a 'vitest' test-id element", () => {
    render(<App></App>, {wrapper: MemoryRouter})

    // screen.debug()
    const viTest = screen.queryByTestId("vitest")
    expect(viTest).toBeInTheDocument();
  })
})