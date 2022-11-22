Feature: Footer

    As I user
    I want to see a footer on every page of the web site
    In order to have access to the owner's social media contacts

    Scenario: Inspecting the footer
      When I inspect the bottom of every page of the web site
      Then I see a Footer element
      And on the Footer element I see a row with links to the Social Media accounts of the owner
      And below that row there is a copyright line.