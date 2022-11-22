Feature: Landing Page

    As a user
    I want to see the landing page
    In order to  have access to the food corner.

    Scenario: Opening Landing Page
      When I request the Website
      Then I See a Navigation Bar on top
      And I see a Hero section with a beautiful meal image as the background
      And on the Hero I see "Food Corner" as the title
      And on the Hero I see "Indian Food at a Click" as the subtitle
      And on the Hero I see an "Order Now" call-to-action button
      And on the bottom of the page I see the Footer element.

      