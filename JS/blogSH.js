// This is the only JS at the moment.
// It checks the date and changes the style accordingly.

const d = new Date();
let month = d.getMonth();
let day = d.getDate();

if(month < 3 || month == 12) {
   document.getElementById("style").href = "/blog/CSS/winter/topper.css";
   
} else if(month < 6) {
   document.getElementById("style").href = "/blog/CSS/spring/topper.css";
   
} else if(month < 9) {
   document.getElementById("style").href = "/blog/CSS/summer/topper.css";
   
} else{
   document.getElementById("style").href = "/blog/CSS/autumn/topper.css";
}