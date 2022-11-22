Feature: Contact Page

    As a user
    I want to open the Contact Page
    In order to contact the owner of the website.

    Scenario: Inspecting the Contact page
      When I click on "Contact" in the Navigation
      Then the "Contact" Page opens up
      And I see the Navigation on the top
      And I see the Footer on the bottom
      And on the left side I see a big meal image
      And on the right side I see a big "Contact" title
      And I see a contact form
      And on the contact form I see a text field for my full name
      And I see a text field for my email address
      And I see a "Submit" button below the form.