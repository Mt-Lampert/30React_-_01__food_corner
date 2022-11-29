## 2022-11-29 21:30

Finished the Home page with a lot of things that were new: MUI icons and a lot of things I had
to fix on the design front. But it was worth it.


## 2022-11-28 20:30

Re-running the previous tests gave me an unpleasant error notice:

```bash
Error: Uncaught [Error: useHref() may be used only in the context of a <Router> component.]
```

So I had to fix all the tests for `<Navbar>` and `<App>`, because even in tests `<Route>` and `<Link>` have to be rendered inside some `<Router>` environment. Changing the code into this finally did the trick:

```javascript
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe("App", () => {
  it("has a 'vitest' test-id element", () => {
    // the wrapper did the trick!
    render(<App></App>, { wrapper: MemoryRouter })

    const viTest = screen.queryByTestId("vitest")
    expect(viTest).toBeInTheDocument();
  })
})
```



## 2022-11-28 09:25

I outlined the Routing for this website with basic page components. Was not too hard. But the steps must be outlined well. Thank God I have it in my Wiki.


## 2022-11-27 21:45

I did some hard refreshing doing Bulma for the navigation bar. Worked quite well, only the hamburger menu did not quite follow the order of clicking. At times the hamburger turned into an X, at times not. Is it Bulma? Is it React? Is it me? I don't know.


## 2022-11-23: 23:51

I prepared everything for the project:

1. vite-react
0. vitest
0. @testing-library/react, @testing-library/jsdom

Writing my first test, I ran into a surprise. Vitest requires test files to end with `.jsx` if the test is about a React component with JSX included. After getting that right, everything went smoothly. Thank God!

