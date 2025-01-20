// This is the only JS at the moment.
// It checks the date and changes the style accordingly.

const d = new Date();
let month = d.getMonth();
let day = d.getDate();

if(month < 3 || month == 12) {
   document.getElementById("style").href = "/CSS/winter/topper.css";
   
} else if(month < 6) {
   document.getElementById("style").href = "/CSS/spring/topper.css";
   
} else if(month < 9) {
   document.getElementById("style").href = "/CSS/summer/topper.css";
   
} else{
   document.getElementById("style").href = "/CSS/autumn/topper.css";
}

// if(month == 2 && day == 31) {
//  document.getElementById("style").href = "/CSS/holiday/transDay.css";
// }

// if(month == 5 && day == 4) {
//  document.getElementById("style").href = "/CSS/misc/birthday.css";
// }

if(month == 11 && day == 10) {
  document.getElementById("style").href = "/CSS/holiday/doom.css";
}