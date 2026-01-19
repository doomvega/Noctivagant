// This is the only JS at the moment.
// It checks the date and changes the style accordingly.

const d = new Date();
let month = d.getMonth();
let day = d.getDate();

console.log(month, day);

if(month < 3 || month == 12) {
   document.getElementById("style").href = "/css/toppers/winterTopper.css";
   
} else if(month < 6) {
   document.getElementById("style").href = "/css/toppers/springTopper.css";
   
} else if(month < 9) {
   document.getElementById("style").href = "/css/toppers/summerTopper.css";
   
} else{
   document.getElementById("style").href = "/css/toppers/autumnTopper.css";
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

if(month == 3 && day == 1) {
   document.getElementById("style").href = "/CSS/april.css";
 }