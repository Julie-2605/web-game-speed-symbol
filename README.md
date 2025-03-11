# Speed Symbol Game

Speed Symbol Game is a small game coding in Javascript. 
It's a game of speed, memory and concentration. The aim is to identify and compare the card and answer whether it is the same card or not, as quickly as possible.

## How To Play

1. Click on the start button "Jouer".
2. Compare the two cards and answer with the button "Oui" or "Non", or with the "X" or "Y" keys.
3. The score change according to the correct answers.

## How It Work

* The main file is `app.js`, function `start()` start the game with the button "Jouer" in front on the `index.html`. It display the card, call a function to do it, launch a timer who will animate the card.
* Before that, the variables is defined with the Event Listener for the load of the DOM. It allow to take the elements of the page, to interact with them later.
* The function `preloadImg()` create an instance of Image of all the element in cards list. It allow to preload the images and to display them faster.
* The function `afficherCard()` interacte with the front and add css.
* The function `verificationCard(userAnswer)` get the user answer and check if it's the correct answer by comparing the previous card. It call in different case the function `displayIconResponse(boolean)` to display the icon appropriate and the function `scoreCount()` to change the score.
* The function `scoreCount()` count the point to display the score on the page by calling the function `displayScore()`.
* There is an other Event Listener to configurate the key to play.

## Installation and Prerequisites

A navigator.

## Projext Structure
```
├───index.html
├───README.md
├───sources.txt
├───asset
│   ├───img
│   └───sound
├───css
│   ├───style.scss
│   └───_variables.scss
├───js
│   ├───app.js
│   └───style.js
```

## Usage

For user who want to play a game.

## User Guide

1. Click on the start button "Jouer".
2. Watch the card and compare to the next card.
3. Click on the correct answer if the two cards correspond, match or not.
4. If the answer is correct increase the score.

## Features
1. Play.
2. Dipslay card.
3. Compare.
4. Count score.

## Credit

By Julie Cariou.

## Ameliorations and Issues

* Main issue, if we precede a correct answer it will remain in a spammy loop, wich continually increases our score.
* Readability of a function with a blend of "franglish".
* Reorganization of files. All functions are in the same file. The code can be more readable and structured.
* Adding a async / defer to launch the script after the load of the DOM.
* Searching for a way to implement images in another way so that they load quickly and don't have display bugs.
* Manage ergonomics and accessibility with an responsive app. Make the instructions on the page clearer to guide user.
* Improve card animation.
* Adding unit test. For the proper functioning of the score and the reactivity of the game, with fast and varied user input. Implementation of a speed test.
* Increase the score with a series of perfect answers. Decrease the score in the event of a wrong answer.
* Create classic, hard mods, etc.
* Set a timer for the game.
