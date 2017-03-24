Feature: Footer links

  Scenario: Homepage about links
    When I go to the homepage
    And I should see the following links
        | About Scratch  | /about      |
        | For Parents    | /parents/   |
        | For Educators  | /educators  |
        | For Developers | /developers |
        | Credits        | /credits    |
        | Jobs           | /jobs       |
