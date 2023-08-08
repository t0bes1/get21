
---
![Get21](../get21/documentation/logo-get21.png)

Get 21 is a fun card game for users that want to practice basic blackjack skills. Double your bankroll to win the game! ... but loss all your chips and the game is over!


## User Stories

As a user I want to be able to play a card game with simple rules, so that I can have fun and practice my decision making skills

As a user I want the game to begin at the start when arriving at the site, so that I can start fresh when I #

As a user I want to be able to see the cards I'm dealt and get shown the total I am on, so that I am able to make a good decision on what to do next

As a user I want to be able to see whether I have won or lost the hand (and why) so that I can make goods decisions in future rounds of the game

As a user I want to be able to bet different amounts on different hands to try  my luck and "go big" if I wish, so that the game is engaging and fun to play

As a user I want to see the score as I am playing so that I can understand how well I am doing in the game

As a user I want to understand that a 200+ bankroll is a winning score so that I can aim to reach this goal and receive some congratulations if I achieve it

As a user I want to understand that a 0 is a losing score so that I can aim to avoid reaching this score and receive some commiserations if I ultimately achieve it

As a user I want to hear celebration or commiseration sounds depending on if I win or lose the game, so that I can enjoy the experience and further understand what the outcome has been achieved


## Features

### Main Game Area

The single page includes a header, with a clickable info button showing the rules:

![Header](../get21/documentation/header-get21.png)

When clicked, the rules are shown as follows:

![Modal](../get21/documentation/modal-get21.png)

A main game area shows 3 cards for the player and 3 cards for the house in the main game area:

![Game Area](../get21/documentation/game-area-get21.png)

There is a section showing the players bet, their bankroll, the game action buttons and a message box:

![Score Area](../get21/documentation/score-area-get21.png)

The page includes a footer, with a link to my github:

![Footer](../get21/documentation/footer-get21.png)

---
## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) - was used to arrange items symmetrically on the pages.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [VSCode](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.

---
## Design

## Wireframes

The basic structure of the website was created using Balsamiq:
[here](../get21/documentation/get21-wireframes.pdf)

## Testing

In order to confirm the correct functionality, responsiveness, and appearance:

+ The website was tested on the following browsers: Chrome, Firefox, Brave.

+ The website was checked with 

    - Desktop Screens: [here](../get21/documentation/desktop-get21.png)

    - Tablet Screens: [here](../get21/documentation/tablet-get21.png)

    - Mobile Screens: [here](../get21/documentation/mobile-get21.png)

+ The functionality of the game in the website was checked as well by different users.

### Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Game Play | | | | | |
| Initial Game State | Refresh page and review set up | All cards are shown face down, a bankroll of 100 & scores at 0 | Yes | Yes | - |
| Stake not set | No entry is made in the stake box, but "Deal" button pressed  | A message appears showing the user that they can't bet nothing and a new deal is offered | Yes | Yes | - |
| Stake greater than Bankroll | Player chooses a stake higher than the Bankroll available  | A message appears showing the user that they can't bet this amount and a new deal is offered | Yes | Yes | - |
| Initial Deal | Enter a valid stake and click on the "Deal" button | The player receives 2 cards, the correct total is shown on the player score and the Hit/Stand choice is offered | Yes | Yes | - |
| Player chooses "Hit" |The "Hit" button is clicked |The player receives a third card, the correct total is calcuated and the house is dealt its cards |Yes |Yes | |
| Player chooses "Stand" and Busts |The "Stand" button is clicked |The player does not receive a third card, the result of the game is calculated as a loss, with the house cards not shown |Yes |Yes | |
| Player chooses "Stand" and scores 21 or lower |The "Stand" button is clicked |The player does not receive a third card, the house hand is dealt correctly, the game result is calculated correctly |Yes |Yes | |
| Hand result is calculated correctly |The hand is concluded after "Hit" or "Stand" |The player score is shown correctly, the house score is show correctly, a win or lose message is displayed correctly |Yes |Yes | |
| Hand outcome of a win is shown correctly |A hand is concluded |The Bankroll is updated to reflect the win, in line with the bet amount |Yes |Yes | |
| Hand outcome of a loss is shown correctly |A hand is concluded |The Bankroll is updated to reflect the loss, in line with the bet amount |Yes |Yes | |
| Game outcome of a win is shown correctly |The player reaches a bankroll of 200 or greater after as many hands as necessary |A congratulations message is shown, a celebration sound is played, the user is offered a restart option |Yes |Yes | |
| Game outcome of a loss is shown correctly |The player reaches a bankroll of 0 after as many hands as necessary |A commiseration message is shown, a commiseration sound is played, the user is offered a restart option |Yes |Yes | |
| Modal | | | | | |
| Game rules are shown  |The "i" button is clicked | The rules of the game are shown to the player |Yes |Yes | |
| Game rules are hidden |The screen is clicked when the modal is open | The rules of the game are no longer shown to the player and the game is playable |Yes |Yes | |
| Footer | | | | | |
| Github icon in the footer | Click on the Github icon | The user is redirected to the Github page | Yes | Yes | - |


---
​
### Bugs
+ ##### Solved bugs
    1. Hand was plaed despite the user selecting a stake greater than the player's bankroll or even at a 0 level
    
        *Solutions:* a game function was added to test the stake amount vs the bankroll and ensure it w3as greater than 0
    ---
+ ##### Unsolved bugs
    - None.

+ ##### Mistakes
    - The game was initially created without the bet feature. This made the user experience lack engagement.

---
## Validator testing
+ ### HTML
  #### Home Page
    - No errors or warnings were found when passing through the official W3C validator.

![W3C Checker](../get21/documentation/w3c-checker-get21.png)
    
+ ### CSS
  No errors were found when passing through the official W3C (Jigsaw) validator:

![W3C CSS Checker](../get21/documentation/w3c-checker-css-get21.png)

+ ### Lighthouse Report: Accessibility and performance 
    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

    Main Game Page:
---
## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the [GitHub repository](), navigate to the Settings tab 
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone 

---
## Credits

+ #### Content

  - All images have been taken personally, they are listed as follows:

---

## Acknowledgments

- [Code Institute](https://codeinstitute.net/) tutors and Slack community members for their support and help.
- [Public Domain Card Images](https://opengameart.org/content/playing-cards-vector-png) were acquired from Open Game Art; thanks for making the design process much easier!
- [Uppbeat](https://uppbeat.io/sfx) provided the win & lose game sound effects

---