Feature: Menu

    As a user
    I want to see the menu page
    In order to make a meal order.

    Scenario: Opening Menu
      When I click on the "Menu" link in the Navigation
      Then I see a title "Our Menu"
      And I see a gallery of available meals
      And each meal appears as a card
      And each card has an image and a title and a price tag.
      
