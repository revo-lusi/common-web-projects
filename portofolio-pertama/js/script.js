const hamMenu = document.getElementById("menu");
const navbarNav = document.querySelector(".navbar-nav");
const navs = [...navbarNav.children];
const sendMsgBtn = document.getElementById("send-msg-btn");

hamMenu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
});

document.body.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

navs.forEach((e) => {
  e.addEventListener("click", (e) => {
    navbarNav.classList.remove("active");
  });
});

sendMsgBtn.addEventListener("click", () => {
  alert("Kocak! ini cuma sample, tombolnya belum fungsi");
});
