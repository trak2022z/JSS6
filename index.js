"use strict";
(function() {

  // motivate why we wait for the load to be complete
  goofy1();
  goofy2();

  //Remove comment
   //window.addEventListener("load", init);

  function init() {
    goofy1();
    goofy2();
  }

  function goofy1() {
    let images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].src = "https://media.giphy.com/media/jaqvaWqpKfImQ/giphy.gif";
      images[i].alt = "three cute puppers!"
    }
  }

  function goofy2() {
    let pTags = document.querySelectorAll("p");
    for(let i = 0; i < pTags.length; i++) {
      pTags[i].textContent = pTags[i].textContent.toUpperCase();
    }
  }

})();