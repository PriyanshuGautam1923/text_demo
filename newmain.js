"use strict";
const link = document.querySelectorAll(".page-link");
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseenter", function () {
    this.classList.add("mouseenter");
  });
  link[i].addEventListener("mouseleave", function () {
    this.classList.remove("mouseenter");
  });
}
