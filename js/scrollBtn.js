let element = document.querySelector(".up-btn");
window.onscroll = function () {
  stickyHeader(element);
};

function stickyHeader(elm) {
  let controller = window.pageYOffset;
  if (controller > 70) {
    elm.style.display = "initial";
  } else {
    elm.style.display = "none";
  }
}

// window.addEventListener("scroll", stickyHeader);
