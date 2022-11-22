Feature: Navbar

    As a user
    I want to see and use the navbar
    In order to navigate through the app.

    Scenario: Inspecting the Navbar on Desktop
      When I open any page on the Website
      Then I see the Navbar on top of the Viewport
      And on the left side I see a logo
      And on the right side I see a menu bar 
      And on the menu bar I see menus for "Home", "Menu", "About" and "Contact"