#wheelie

Project WHEELIE.

We will create a spinning wheel game. The user will spin the wheel and will receive a movie recommendation from MOVIE DB database.
When the page loads the user will be presented with few filters.  (ex. movie type, year of release)
Next, the user will spin a wheel. The wheel will be divided into 8 parts. Each part will represent a movie recommendation
The spinning wheel will retrieve  - filtered - movie recommendations from IMDB database.

HTML PAGE DRAFT MARKUP
Welcome message
Filters
Spinning wheel                       // we need to retrieve from API IMDB, movie title and genre and show the movie title to the wheel divs
Spinning wheel  start button
Spinning Wheel Arrow                // we need to create a relationship between the arrow and the div that will end up right next to it
Result Message                     // the message will be related to the movie title



// https://jsfiddle.net/learndesigntutorial/ohx1j6uc/3/


// The syntax for Math any methods is : Math.method(number)
// Math.floor(x) returns the value of x rounded down to its nearest integer:
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

// The content property is used with the ::before and ::after pseudo-elements, to insert generated content.

// The translateY() function is an inbuilt function which is used to reposition the element along the vertical axis.

//  clip-path, is  a property which allows you to prevent a portion of an element from being displayed. The region that is visible is governed by the values you provide. 

clip-path: polygon(0 92%, 100% 50%, 0 8%);


https://blog.hubspot.com/website/html-radio-button   (FOR RADIO BUTTON)



***********************************************************************************
API Key (v3 auth)

e96538d3c36ac6d0f81ca3bcb38e1e1e

example API request 
https://api.themoviedb.org/3/movie/550?api_key=e96538d3c36ac6d0f81ca3bcb38e1e1e

API Read Access Token (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTY1MzhkM2MzNmFjNmQwZjgxY2EzYmNiMzhlMWUxZSIsInN1YiI6IjYyYTY0YTJhODUwMDVkNGMwODJjNDM5NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nMXkiEkz_jtCZrKXx3cku5RaDfEX7EXgan8QFAEsmGU



https://api.themoviedb.org/3/genre/movie/list?api_key=e96538d3c36ac6d0f81ca3bcb38e1e1e&language=en-US