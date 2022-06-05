let cursor;
let x, y;
const mouseFunc = (e) => {
  (x = e.clientX), (y = e.clientY);
  cursor.style.transform = `translate(${x}px, ${y}px)`;
  //

  let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      cursor.classList.add("link-grow");
      // cursor.style.zIndex = "-1";
      // link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("link-grow");
      // cursor.style.zIndex = "1000";
      // link.classList.remove("hovered-link");
    });
  });
};

window.onload = () => {
  cursor = document.getElementsByClassName("cursor")[0];
  document.addEventListener("mousemove", mouseFunc);
};
