const SWITCH = document.querySelector(".switchdaynight");
const BODY = document.querySelector("body");
const TOPMENU = document.querySelector(".top-menu");
const PARTNER = document.querySelector(".home-partners");
const H01 = document.querySelector("h1.sponsor-1");
const H02 = document.querySelector("h1.sponsor-2");
const H03 = document.querySelector("h1.sponsor-3");
const P01 = document.querySelector("p.sponsor-1");
const P02 = document.querySelector("p.sponsor-2");
const P03 = document.querySelector("p.sponsor-3");
const B01 = document.querySelector("b.sponsor-1");

SWITCH.addEventListener( "click", function() {

  if ( this.classList.contains("on") ){
    this.classList.remove("on");
    BODY.classList.remove("on");
    TOPMENU.classList.remove("on");
    PARTNER.classList.remove("on");
    H01.classList.remove("on");
    H02.classList.remove("on");
    H03.classList.remove("on");
    P01.classList.remove("on");
    P02.classList.remove("on");
    P03.classList.remove("on");
    B01.classList.remove("on");
  } else {
    this.classList.add("on");
    BODY.classList.add("on");
    TOPMENU.classList.add("on");
    PARTNER.classList.add("on");
    H01.classList.add("on");
    H02.classList.add("on");
    H03.classList.add("on");
    P01.classList.add("on");
    P02.classList.add("on");
    P03.classList.add("on");
    B01.classList.add("on");
  }
});