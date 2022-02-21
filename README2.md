# The largest heading
## The second largest heading
###### The smallest heading
You can display an image by adding ! and wrapping the alt text in [ ]. Then wrap the link for the image in parentheses ().

![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)
# ROCK PAPER SCISSORS LIZARD SPOCK
## What is the Purpose of ROCK PAPER SCISSORS LIZARD SPOCK (RPSLS) ?
The purpose of this site is to make a game of chance that has interactive data that has increasing challenges which keeps the user entertained. The site is an interactive front-end website and the main technologies used were HTML,CSS and Javascript. RPSLS is a site that demonstrates how pure javascript works in real world context. 
Its is responsive to my users actions and allows them to actively engage with data and alter the way the site displays the information. This helps to achive our goal to having our user either win or loose the RPSLS game.
Our external users gaols were to play an online game which is targeted towards people who have a bit of free time and want to test their luck with playing a hand of Rock, Paper, Scissors, Lizard, Spock which is an advanced version of the clasic hand gesture game, Rock, Paper Scissors. We have also included a level of difficulty which increases the chances of our user loosing the game and making it harder to win again the opponent.

Our site owners goal was to provide a challenging game with an increasing level of difficulty to keep our online user enertained.
We have done this with including patteren matching functionality where the hand the user chooses is compared to the opponent and factored into increasing the chance that the computer will win the hand if the difficulty level has been raised.
On easy the computer will make a random choice of hand to draw and it will be compared to what the player has chosen. If the selection of hand gesture is the same, the result will then be a draw and no points will be given, and if the chosen hand is the stronger by the player then the player will recieve a point and if it is weaker then the computer will recieve the point. 
The challenge is to be the first to 5 points to be the champion. 
We can keep track of the users and the computers points with the allocated score board and we are suggested to the winner of the hand by a pop up alert indicating the winner of the point for the hand and the overall Champion winner with their overall score.

## UX
The UX for this project will be investigated through the following five planes:
### Strategy Plane:
Business goals?
The main business goal is to keep our user entertained by a game of chance. We have made it more challenging by giving an upper hand to the opponent when the difficulty level has been selected making it harder for the user to be the first to 5 wins and being crowned CHAMPION! 

Why are we special? Who are competitors? What are they doing?
RPSLS has originally been a hand gesture game played between 2 people and using only the simple Rock Paper Scissors. This at times can often be boring with only a few selctions and a winner can quickly be determinded. with our JS code we have been able to make it harder to win the game as there are now more choices as well as an increase in difficulty which makes it more challenging. 
There are other RPS games online but one stand out is that our site is visually appealing, easy to use and quick to understand. We have kept things symbolic and simple as this game chould be used to play on a mobile phone anywhere at any time with keeping a RETRO theme to go along with the idea of a classic game.
![Image of Responsive Design for desctop and mible](./assets/images/responsive-design-mix.jpg)

Tech considerations?
Certain technogoy considerations are that the site needs to be simple, interactive, stylised and challenging. This is where CSS and JS have played the biggest part with creating functions, for loops and if statements to make this site user friendly while still being functional and detailed. 

Why would a user want this?
Not only does the site have an interesting look to it but it has a level of challenge to the game that sometime cannot be beat. When you are competing with a computer with an upper hand it becomes a challenge to make sure you choose the right hand at the right time because the computer will not always win which keeps the game interesting.

Who is my target audience?
Our targeted is towards younge tech, savvy people who have a bit of free time and want to test their luck with playing a hand of Rock, Paper, Scissors, Lizard, Spock. We have also included a level of difficulty which increases the chances of our user loosing the game and making it harder to win again the opponent. they are more likely to be younge and on their mobile phone looking for something fun and challenging to keep them enteratined.


When you go to a particular site, where do you go first?
Existing users will be able to jump right in and choose their hand but a new user will be first drawn to selecting an interactive hand slection, this will activate the hover popup which will indictate the before and after function of the strengths of the hand to be selected. This will then draw the attention of the new user to look into the rules of the game which will take you to a new tab where further detials of the strengths and weakensses of the selected hands and how to play the game. we have kept things clean and simple for the user to understand as this target market is used to seeing symbols and associating them to functions and values, this is also made easier by establishing their values in the rules section on a separate tab.

What makes a good experience?
The game is simple to use and the popup alerts grab your attention when selecting your hand not to mention the interactive functionality of the buttons makes it interesting just selecting your choice in hand. It is also eye catching and you dont have to hunt around to find out information. It literally pops up  on a hover.

## Scope Plane:
Most important features in no particular order:

- Hand Gesture Choices,
- Rules,
- Score Results,
- Rules link,
- Play game link,
- Winning hand pop up,
- CHAMPTION overall winner pop up,
- Increase difficulty button,
- Strengths of hand choices,
- Reset or Start again button.

Key milestones:

- Responsive design to include for mobile as well as desctop
- Keeping spacing and styling the same with using both buttons and links interchangabily
- Creating functions for the math random computer selction
- Including the difficulty button to increase computers hance of winning
- Including if statements to increase players points if hand is won
- Creating pop up alerts to indicate winners of each hand and round
- creating a reset button to clear the scores of each player to start again from 0 

I have included a hover over feature on the hand choices, this includes a before and after function to show the strengths of selecting that hand as well as an expanding border to excentuate the selected hand. We have also incuded a highlight hover for the tabs and buttons for Play game, rules and reset.
![Image of Hover feature for hand choices](./assets/images/hover-before-after-strengths.jpg)
![Image of Hover feature for rules, reset and play game](./assets/images/hover-highlight-tab.jpg)

I have made pop up alerts for when the player has won or lost a point and a final pop up for the champion who was the first to win 5 games.
Originally I had the Alert pop ups to show the winners but I could not style the pop ups and wanted more creative control.
I would have liked to include a sound clip of moving image for the Champion pop up but due to limit in knowledge I was not able to include these features, howwever it is not important to the functioning of the game.
![Image of Champions winning score](./assets/images/winner-pop-up.jpg)

I have included a Rules page, however due to the before and after function on the hover of the button hand choices, this was not necessary to do but I thought it would be good to include for any new users who are foreign or who are not familiar with the extended version of the RPS game.
![Image of rules page](./assets/images/rules-details.jpg)

Doing the increase of difficulty was chanllenging as I knew what to do to make the computers choice more likely to win but I was not sure of how to implement the function for it. After creating the array of weaknesses I was able to take the opponents hand and inclued it into the array for the random hand choices to give the computer a better chance to either win or draw the hand. Also including some styling to indicate whether the difficulty was active or not helps to show the user if they are on easy or hard difficulty.
![Image of easy button](./assets/images/easy-difficulty-button.jpg)
![Image of hard difficulty activation button](./assets/images/hard-difficulty-button.jpg)

The reset button originally created a problem where you would select the button and the string would be reset to 0 but then if you continuted to play the scores would start incrementing from the score you had from where you had selected reset. this was due to only resetting the string output of the inner text and not resetting the actual score too. This has now been corrected and is now functioning correctly.

## Structure Plane:
Information architecture:
Based off the info in Strategy and Scope, I have stuck to a basic grid structure which seemed to be the most appropriate structure the model as there is not a lot of content. I have kept to the F shapped pattern reading for the heigherachy of content where the user can see the most important elements on the first load of the page for both mobile and desctop.
The most important items and information being player score, alert pop ups and hand selection being at the top and middle of the loaded page and teh extra information being at the bottom to the left.

Game Name > Player and Scores > Alert pop ups> Hand selection and Difficulty > Rules and Rest buttons
![Image of Home page basic grid layout](./assets/images/home-basic-layout-grid.jpg)

Principles of Organization:

Currently stands that users to be engaged as soon as they come to site is main priority. Implementation of 5 second rule.
If a pre-existing user visits the site they can go straight into the game and if it is a new user, they can find further rule information at the bottom left hand corner, following the F shapped pattern reading of important information.

- We have the players and their scores at the top of the page under the Game name to indicte that the game is for points and there will be a champion or overall winner.
- Next is the players hand selction showing the variety of options with diffences in color choices for each as not to get confused between the choices which also include the strenths options of each hand choice
- lastly we have our extra Rules and Rest buttons, stylised differently to the hand selections to ensure there is no confusion with the game also included to give further information of how to play the game for new players.
- We are then presented with the Rules page appon selection where the strenghts and weakenses of each hand choice are visible with the appropriate color to represent the chosen hand as well as the main aim of the game stated at the very top under the RPSLS name.
- There is also a call to action after reading the rules to PLAY GAME with a button at the bottom left hand side.
![Image of Rules page basic layout](./assets/images/rules-page-layout.jpg)

## Skeleton Plane:
Desktop Wireframes: Desktop Wireframes of Game
![Image of Wireframe for Desktop Game](./assets/images/wire-frame-structure-game-desctop.jpg)

Responsive design for Game index page:
![Image of responsive design for Game index page](./assets/images/responsive-design-index.jpg)


Mobile Wireframes: Mobile Wireframes of Game and Rules with Rules Desktop layout
![Image of Wireframe for Mobile Game and Rules](./assets/images/wire-frame-structure-rules-mobile.jpg)

Responsive design for Rules page:
![Image of responsive design for Rules page](./assets/images/responsive-design-rules.jpg)

## Surface plane:
Font: Will be a mix of “Raleway” (Sans-Serif) for the body and “Alata” for the main heading.

Color: Background Color will be Black with a RETRO colour scheme of 6 colours. Color scheme was selceted by using Coolors to decide on the shades of colors to use. Going off the reference of the arcade game PackMan.
![Image of Coolors Color Scheme RETRO](./assets/images/coolors-colors.jpg)

### Features:
This project will be composed of two main pages. The Home(index.html) and the rules(rules.html) page.
Each page will have the exact same header and footer to promote familiarity.

#### Home Page:
Header:
Has the RPSLS Game name so the user can know what game they are playing from whne they load the page.
![Image of Rock, Paper, Scissors, Lizard, Spock Game Name](./assets/images/Header-RPSLS.jpg)

Score Area:
The player who wins the game hand will gain +1 point and the first to 5 is champion. This is highlighted by a popup alert of the winner of the hand and what the results of the round were. This important section also includes the Difficulty button to adjust the difficulty ssetting of the game.

![Image of score area with alert popup](./assets/images/score-area-RPSLS-index.jpg)

Game Area:
The Player will then notice the hand selection area where they can choose what hand to play. there is a before and after hover on the hand choices where it reveals what the strengths are of the hand  and on selection the border disapears as a slow fade out.
![Image of game area with hover selection](./assets/images/game-area-selection.jpg)

Administration Area:
Below the game area we find our administation navigation to a separate rules page with further details of the game and also a reset button which resets the player scores to start again. 
![Image of admin area with highlight on selection](./assets/images/admin-area-rule-reset.jpg)

#### Rules Page:
Header:
head title of the RPSLS game and the Aim of the Game to reach to 5 points first to be champion. 

![Image of rules header area with aim of game](./assets/images/rules-header-aim-of-game.jpg)

Rules Area:
We also feature the hand selection options in the same area as the main game to show the rules of the game and the strength and weaknesses of the hand choices in detail.
We also feature te call to action to Play the Game at the bottom left hand corner sticking with our F shaped patteren of importance. tthis also features a hover og highlighting.
![Image of rules header area with aim of game](./assets/images/rules-area-and-play-button.jpg)

## Technologies Used
This project will primarily be made up of HTML, CSS with Java Script.

HTML: Used to make framework and content of the site

CSS: Used to style this content and the webpage as a whole as well as create inteactive features such as hovers and responsive design elements.

Java Script: Used to create the functions needed to make the site interactive, have the game run and generate a computer random response. Create for loops and the if statements to keep track of score of winning games, difficulty increases in game results and have an overall winner when the play who recieves 5 wins is reached and the game resets automatically after or by prompt of the button selected. 

## Features Left to Implement:
I wanted to include a shadding for the background to further emphasise the alert pop ups when a game is won but a limit in knowlege and time left this unimplemented as it was not vital for the running of the game.
I would have liked to include a sound clip of moving image for the Champion pop up but due to limit in knowledge I was not able to include these features, howwever it is not important to the functioning of the game.

## Testing
After each milestone has been complete or a new function has been implemented, a series of tests has be run to ensure its functionality. All HTML, CSS and JS have gone through relevant testing and validation sites to ensure all errors have been dealt with.

After rigourous testing through use, the following JS and CSS issues have arose:
- There was responsiveness issues after I redesign the look of the site. I then included a display flex which made the elements a lot more dynamic on the page.
- The reset button originally created a problem where you would select the button and the string would be reset to 0 but then if you continuted to play the scores would start incrementing from the score you had from where you had selected reset. This was due to only resetting the string output of the inner text and not resetting the actual score too.
- There was also an error with a function not being called in the if statement correctly with the first to 5 function because the opponent would only need to recieve 4 points in order to win where as the user would have to recieve 5 point in order to win. this was corrected with the corrcet placement of the callback function in the IF statement
- There was an inconsistancy with the look of the link to Rules page and the Reset button but after a few styling changes the buttons now look the same as eachother.

### Validation
HTML:
I have put HTML code through W3C HTML Markup Validation Service which has presenting the following issues in HTML.
Index Page:
- cannot use an a tag in a button
- Duplicate of an ID and 
![Image of W3 HTML testing error Index Page](./assets/images/W3-HTML-Error2.jpg)

Rules Page:
- stray em tag
![Image of W3 HTML testing error Rules Page](./assets/images/html-checker-error-rules.jpg)

AFTER CORRECTIONS:
I have put HTML code through W3C Markup Validation Service which now is presenting no issues after fixing for both the Rules and Index Page:

Index:
![Image of W3 HTML testing no error Index Page](./assets/images/html-checker-warning-index.jpg)

Rules:
![Image of W3 HTML testing no error Rules Page](./assets/images/html-checker-no-error-rules.jpg)

CSS:
After I have put CSS code through W3C CSS Markup Validation Service it has presenting the following issues in CSS.
- margin error
- background colour unknown dimensions
![Image of W3 CSS testing errors](./assets/images/W3-CSS-Error1.jpg)

I have now put CSS code through W3C CSS Validation Service which now is presenting no issues after fixing.
![Image of W3 CSS testing no error](./assets/images/css-checker-no-error-index.jpg)

Java Script:
I have put my Java Script code through JS Hint Validation Service which now is presenting no errors and the following configure.
- Metrics
- There are 12 functions in this file.
- Function with the largest signature take 1 arguments, while the median is 0.
- Largest function has 25 statements in it, while the median is 3.5.
- The most complex function has a cyclomatic complexity value of 13 while the median is 1.

![Image of JS Hint metrics](./assets/images/jshint-2arguments-median-of-2-complexity.jpg)

A Final testing has taken place before submission through both local and remote deployment on desktop, mobile and tablet. 
There are No noticeable bugs appearing as far as I am aware. Overall, I am satisfied with what I have produced and as my knowlegde in Java Script and other languages grows I am sure I will revisit and develop this further.

## Deployment
Development Life Cycle
The development of this site has changed with becoming more comfortable with Java Script and Css. Making use of serveal differnt resorces from the web as well as YouTube to help with implementing functions and reminding me of how to use them. This has helped to evolve my simple Rock Paper Scissors game into a fully functional RPSLS interactive fun game. 

How did I Deploy?
Go to (https://github.com/chloe-js/rock-paper-scissors-lizard-spock)
On this page click into Settings.
On the settings page, scroll down to Github Pages section
Under Source select master branch and press Save.
Published link will then be present.
Published link to access and view live site: (https://chloe-js.github.io/rock-paper-scissors-lizard-spock/)

## Credits
Content
The look and feel of the game is taken from the Retro style of PackMan.
![Image of PackMan Retro look](./assets/images/PackMan-Style.jpg)

The understanding of the game comes from Wikipedia for the game logic and rules used.
- (https://en.wikipedia.org/wiki/Rock_paper_scissors)

Functional understanding of the game and how to make it work came from the basic HTML and JS from the following sites.
Pure and Simple - Tic Tac Toe with Javascript 
- (https://dev.to/bornasepic/pure-and-simple-tic-tac-toe-with-javascript-4pgn)

Rock, Paper, Scissors - Vanilla JS
- (https://codepen.io/rpandrews/pen/oKRLxY)

General Ideas for functional and interactivity came from the Love Math Code Instatute Challenge.
-(https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LM101+2021_T1/courseware/2d651bf3f23e48aeb9b9218871912b2e/d0c54cdeabac4769863707b475f562f7/)

General queries were answered by using various help docs in StackOverflow, Free Code Camp and MDN web docs.

- (https://www.w3schools.com/js/)
- (https://developer.mozilla.org/en-US/)
- (https://www.freecodecamp.org/)

## Version Control
Git & GitHub
I used GitPod as a local repository and IDE and GitHub as a remote repository. The process of version control was:
First i created a new repository on GitHub
I have then opened that repository on GitPod and started coding
In GitPod i have created all the pages and and folders
I was then saving my work and pushing it to GitHub repository to keep it safe
Process for saving, commiting and pushing it to remote repository goes as follows (done in terminal):
git add . for adding work to git
git commit -m "Commit message" to commit the work on the stage
git push to update work to GitHub
Deployment
To deploy the website, I followed the below steps on GitHub.
Go to "Settings" on the repository
On "Source" of "GitHub Pages", select "master for Branch and click save
The website is now published on GitHub Pages and the link is provided on on the same section

CREDITS 
// reference where you got content (Love MAth)(Spencer link)(RPS game)
//content and media

    CONTENT
    // text for home page if from wikipidea
    // instructions  how to implement validation on the sign up page - taken from YOU TUBE 
    >> before and after :: pseudo elements. creats content of html 
    >> The ::before and ::after pseudo-elements in CSS allows you to insert content onto a page without it needing to be in the HTML. While the end result is not actually in the DOM, it appears on the page as if it is
    >> https://codepen.io/rpandrews/pen/oKRLxY >> Rock, Paper, Scissors | Vanilla JS
    TUTORIAL ()
    // icons in footer taken from FONT AWESOME AND GOOGLE FONTS

    MEDIA
    // photos use xxx are from This site
    // images on site are taken form xyz

OTHER GENERAL PROJECT ADVICE
// keep commit message in APROPRIATE MOOD! 

