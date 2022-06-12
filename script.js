
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}



// *******************************SPINNING THE WHEEL CODE ******************************


function letsSpin() {
  
    var x = 1024; //min value
    var y = 9999; //max value

    var deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById('wheel').style.transform = "rotate("+deg+"deg)";
  
}



// The syntax for Math any methods is : Math.method(number)
// Math.floor(x) returns the value of x rounded down to its nearest integer:
// Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):