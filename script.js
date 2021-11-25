const navmenu = document.querySelector(".navmenu");
const navi = document.querySelector(".navi");

navmenu.addEventListener("click", () => {
    navi.classList.toggle("navioff");
});