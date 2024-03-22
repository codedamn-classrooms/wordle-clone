import { dictionary, targetWords } from "./data.js";

console.log({
	dictionary: dictionary.length,
	targetWords: targetWords.length,
});

// Constants for game setup

// DOM elements for interaction

// Calling the start interaction function as the JS loads
startInteraction();

// Function to start user interaction events - startInteraction()
function startInteraction() {}

// Function to stop user interaction events - stopInteraction()
function stopInteraction() {}

// Function to handle mouse click events - handleMouseClick()
function handleMouseClick(e) {}

// Function to handle key press events
function handleKeyPress(e) {}

// Function to handle key press events - pressKey()
function pressKey(key) {}

// Function to handle key deletion events - deleteKey()
function deleteKey() {}

// Function to handle the submission of a word guess - submitGuess()
function submitGuess() {}

// Function to handle the flip animation of a tile during the word guessing process - flipTile()
function flipTile(tile, index, array, guess) {}

// Function to retrieve active tiles from the guess grid - getActiveTiles()
function getActiveTiles() {}

// Function to display an alert with a specified message and optional duration - showAlert()
function showAlert(message, duration = 1000) {}

// Function to trigger a shake animation on a set of tiles for visual feedback - shakeTiles()
function shakeTiles(tiles) {}

// Function to check the win or lose condition based on the user's guess - checkWinLose()

// Function to animate tiles by adding and removing the 'dance' class - danceTiles()
function danceTiles(tiles) {}

/******************************************
 *
 *
 *
 *
 *
 *
 * DO NOT CHANGE ANY CODE BELOW THIS
 *
 *
 *
 *
 *
 *
 *
 **********************************************/

window.WORD_LENGTH = WORD_LENGTH;
window.FLIP_ANIMATION_DURATION = FLIP_ANIMATION_DURATION;
window.DANCE_ANIMATION_DURATION = DANCE_ANIMATION_DURATION;
window.offsetFromDate = offsetFromDate;
window.msOffset = msOffset;
window.dayOffset = dayOffset;
window.targetWord = targetWord;
window.keyboard = document.querySelector("[data-keyboard]");
window.alertContainer = document.querySelector("[data-alert-container]");
window.guessGrid = document.querySelector("[data-guess-grid]");
