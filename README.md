# Mr. Roboger's Neighborhood 🏠
by [Hayeong Pyeon](https://www.hayeong.website)

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Description](#description)
3. [Setup Requirements](#setup-requirements)
4. [Link](#link)
5. [Tests](#tests)
6. [Known Bugs](#known-bugs)
7. [License](#license)

## Technologies used
- HTML5
- SCSS
- JavaScript (Array, loop, if statements, functions)
- VS Code
- Git commands
- Test Driven Development

## Description
- This is an independent project assigned by Epicodus. 
- This project is to review 'Arrays and Looping' course. 
- This page contains 'Tests' section to practice TDD. 

## Setup Requirements
* Clone this repository to your desktop.
* Navigate to the top level of the directory. 
* Open `index.html` in your browser. 

## Link
https://hypyeon.github.io/epicodus-project3-roboger/

## Tests
```
Describe: getArray();  
 
Test: "Returns an array of number(s) as strings that starts with 0 and the input becomes the last element.";  
Code: getArray(5);  
Expected: ["0", "1", "2", "3", "4", "5"];  

Describe: replaceNumToPhrase();

Test: "Within an array, any number that includes number 1 will be replaced by a string 'Beep!', any number that includes 2 will be replaced by a string 'Boop!', and any number that includes 3 will be replaced by a string 'Won't you be my neighbor, friend?', 'friend' will be replaced by the value of text input when filled out and submitted.";  
Code: replaceNumToPhrase(3);  
Expected: "0, Beep!, Boop!, Won't you be my neighbor, friend?";  

Test: "The string replacement will take priority from 3, 2, and 1 in order.";  
Code: replaceNumToPhrase(14);  
Expected: "0, Beep!, Boop!, Won't you be my neighbor, friend?, 4, 5, 6, 7, 8, 9, Beep! Beep!, Boop! Won't you be my neighbor, friend?";   

Test: "Any number in an array that does not include 1, 2, or 3 will remain as number.";  
Code: replaceNumToPhrase(9);  
Expected: "0, Beep!, Boop!, Won't you be my neighbor, friend?, 4, 5, 6, 7, 8, 9";
```
## Known Bugs
- No issues found as of the last update. Feel free to [reach out](mailto:hayeong.pyeon@gmail.com) if encountered any.
- Last updated: November 28, 2023

## License
[MIT](/LICENSE.txt)
Copyright © 2023 Hayeong Pyeon