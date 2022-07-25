




// *******************************SPINNING THE WHEEL CODE ******************************


function letsSpin() {
  
    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('wheel').style.transform = "rotate("+deg+"deg)";
  
}


fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=e96538d3c36ac6d0f81ca3bcb38e1e1e')
.then(response => response.json())
.then(data => console.log(data));


// The syntax for Math any methods is : Math.method(number)
// Math.floor(x) returns the value of x rounded down to its nearest integer:
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):


// https://api.themoviedb.org/3/5TdKvZimLSJHPQW8t3ctlsusnmH.jpg