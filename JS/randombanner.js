

var Banners = [
  "/images/seasonal/banner/flat1.webp",
  "/images/seasonal/banner/flat2.webp",
  "/images/seasonal/banner/flat3.webp",
  "/images/seasonal/banner/flat4.webp",
  "/images/seasonal/banner/flat5.webp",
  "/images/seasonal/banner/flat6.webp",
  "/images/seasonal/banner/flat7.webp",
  "/images/seasonal/banner/flat8.webp",
];



function RandomBanner(){
  var num = Math.floor(Math.random() * (Banners.length+1));
  document.getElementsById("banner").href = Banners[num];
}

console.log("HEWWO? HEWWO??");