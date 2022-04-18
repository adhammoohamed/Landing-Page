/**
 *  Add sections dynamically.
 * by using addSection function and append the section in menu tag.
 * iam using template literals to using es6 and,
 *  to javascript compiler reads the html elements and adds them to the page.
 **/

// make counter to put the number of the section
let counter = 0;
// make functions to add sections using javascript
const addSection = function () {
  counter++;
  let content = `<section id ="section${counter}" data-nav ="Section ${counter}">
  <div class= "landing__container">
  <h2>Section ${counter}</h2>
  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Expedita consequuntur, hic odio aspernatur,
   ipsum corporis quod possimus necessitatibus quos at similique aliquid assumenda maxime recusandae! 
   Aliquam consectetur et nulla minima.
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Expedita consequuntur, hic odio aspernatur,
   ipsum corporis quod possimus necessitatibus quos at similique aliquid assumenda maxime recusandae! 
   Aliquam consectetur et nulla minima.
  </p>

  <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Expedita consequuntur, hic odio aspernatur,
   ipsum corporis quod possimus necessitatibus quos at similique aliquid assumenda maxime recusandae!
   Aliquam consectetur et nulla minima.
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
   Expedita consequuntur, hic odio aspernatur,
   ipsum corporis quod possimus necessitatibus quos at similique aliquid assumenda maxime recusandae!
   Aliquam consectetur et nulla minima.
  </p>
  </div>
  </section>`;

  // I used insertAdjacentHTML to add sections before the end of the tag
  document.querySelector("main").insertAdjacentHTML("beforeend", content);
};

/**
 * Create a dynamic navigation bar
 **/
let navBar = document.querySelector("#navbar__list");
let addNavItems = function () {
  navBar.innerHTML = "";
  document.querySelectorAll("section").forEach((el) => {
    let addLis = `<li><a href = "#${el.id}" data-nav ="${el.id}" class ="menu__link">${el.dataset.nav}</a></li>`;
    document.querySelector("ul").insertAdjacentHTML("beforeend", addLis);
  });
};

//make scroll behavior smooth
let element = document.querySelector("html");
element.style.scrollBehavior = "smooth";

//make an active section with intersectionObserver

// make options to add an active class when the section is visable at 75%
let options = {
  threshold: 0.75
};
let observerSection = function () {
  let observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      let actinvList = navBar.querySelector(`[data-nav=${entry.target.id}]`);
      if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class");
        actinvList.classList.add("active-link");
      }else{
        entry.target.classList.remove("your-active-class");
        actinvList.classList.remove("active-link");
      }
    });
  }, options);
  return document.querySelectorAll("section").forEach((section)=>{
    observer.observe((section))
  })
};

// // button to create sections
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  addSection();
  addNavItems();
  observerSection();
});

// // button to go to top
let up = document.getElementById("go-up");

window.onscroll = function () {
  if (window.scrollY >= 375) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};

up.onclick = function () {
  window.scrollTo(0, 0);
};

addSection();
addSection();
addSection();
addSection();
addNavItems();
observerSection();
