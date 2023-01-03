Feature: Heroku app Login Scenario
    
    Scenario: Add Item to cart
        Given I am on the front page
        When I try to login with username "FransiskusFebri" and password "asd123"
        Then I am successfully logged in with username "FransiskusFebri"
        When I add item "Samsung galaxy s6" to cart
        Then I log out
