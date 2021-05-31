const SWITCH = document.querySelector(".switchdaynight");
const BODY = document.querySelector("body");
const TOPMENU = document.querySelector(".top-menu");
const PARTNER = document.querySelector(".home-partners");
const B01 = document.querySelector("b.sponsor-1");

SWITCH.addEventListener( "click", function() {

  if ( this.classList.contains("on") ){
    this.classList.remove("on");
    BODY.classList.remove("on");
    TOPMENU.classList.remove("on");
    PARTNER.classList.remove("on");
    B01.classList.remove("on");
  } else {
    this.classList.add("on");
    BODY.classList.add("on");
    TOPMENU.classList.add("on");
    PARTNER.classList.add("on");
    B01.classList.add("on");
  }
});