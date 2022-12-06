## 2022-12-06 21:30

Had quite a struggle with one interactive test in `Home.spec.jsx`. After clicking an internal link,
the page supposed to appear, did not appear.

Solution: I had to give the screen engine some time to re-render the page before checking for new
elements on the page. 100ms were finally enough. Here's the code that finally did it. `setTimeout()`
was found to be crucial.

```javascript
import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

describe("Home CTA", () => {
  it("has a call-to-action button leading to the catalog", async () => {
    userEvent.setup();
    render(<Home />, { wrapper: Router });
    // const cta = screen.getByRole("button", {name: "Order Now!"})
    const cta = screen.getByRole("link");
    expect(cta).toBeInTheDocument();

    await userEvent.click(cta);
    setTimeout(() => {
      const menuC = screen.getByTestId("menu-container");
      expect(menuC).toBeInTheDocument();
    }, 100);
  });
});
```

## 2022-11-30 11:45

I made it! the menu list page looks fantastic!

## 2022-11-30 10:20

Just finished with items 1-4 in the list. I really like the result. Now new planning is necessary for designing the grid of the Menu container inside `Menu.jsx`.

## 2022-11-30 08:00

For the menu page some planning and coordination is needed. So this is how I'm going to do it:

1. Do the containers for the list component `Menus.jsx`.
2. Import the data from `helpers/data.js`.
3. Build a wrapper card component for a list item. The necessary data will be passed using props.
4. Display **one single** card inside the list for finetuning its design.
5. loop through the complete list of meals.

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
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {
  it("has a 'vitest' test-id element", () => {
    // the wrapper did the trick!
    render(<App></App>, { wrapper: MemoryRouter });

    const viTest = screen.queryByTestId("vitest");
    expect(viTest).toBeInTheDocument();
  });
});
```

## 2022-11-28 09:25

I outlined the Routing for this website with basic page components. Was not too hard. But the steps must be outlined well. Thank God I have it in my Wiki.

## 2022-11-27 21:45

I did some hard refreshing doing Bulma for the navigation bar. Worked quite well, only the hamburger menu did not quite follow the order of clicking. At times the hamburger turned into an X, at times not. Is it Bulma? Is it React? Is it me? I don't know.

## 2022-11-23: 23:51

I prepared everything for the project:

1. vite-react
2. vitest
3. @testing-library/react, @testing-library/jsdom

Writing my first test, I ran into a surprise. Vitest requires test files to end with `.jsx` if the test is about a React component with JSX included. After getting that right, everything went smoothly. Thank God!
