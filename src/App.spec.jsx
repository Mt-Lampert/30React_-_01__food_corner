// import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("App", () => {
  it("has a 'vitest' test-id element", () => {
    render(<App></App>)

    // screen.debug()
    const viTest = screen.queryByTestId("vitest")
    expect(viTest).toBeInTheDocument();
  })
})