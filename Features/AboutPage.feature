Feature: About Page

    As a user
    I want to see the about page
    In order to know about the page owner

    Scenario: Opening About Page
      When I klick on the "About" link inside the Navigation
      Then the "About" page opens
      And  I see the Navigation
      And I see a food image on top of the page
      And I see a big, fat "About Us" title below the food image
      And I see a paragraph about the page owner.
      And I see the Footer at the bottom of the page
      
