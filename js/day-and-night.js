const SWITCH = document.querySelector(".switchdaynight");
const BODY = document.querySelector("body");
const TOPMENU = document.querySelector(".top-menu");
const PARTNER = document.querySelector(".home-partners");
const INFOP = document.querySelector("p");
const H1 = document.querySelector("h1");
const H2 = document.querySelector("h2");
const H3 = document.querySelector("h3");
const H4 = document.querySelector("h4");

SWITCH.addEventListener( "click", function() {

  if ( this.classList.contains("on") ){
    this.classList.remove("on");
    BODY.classList.remove("on");
    TOPMENU.classList.remove("on");
    PARTNER.classList.remove("on");
    INFOP.classList.remove("on");
    H1.classList.remove("on");
    H2.classList.remove("on");
    H3.classList.remove("on");
    H4.classList.remove("on");
  } else {
    this.classList.add("on");
    BODY.classList.add("on");
    TOPMENU.classList.add("on");
    PARTNER.classList.add("on");
    INFOP.classList.add("on");
    H1.classList.add("on");
    H2.classList.add("on");
    H3.classList.add("on");
    H4.classList.add("on");
  }
});