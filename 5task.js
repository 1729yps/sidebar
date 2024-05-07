const menuButton = document.getElementById("menubtn");
const closeButton = document.getElementById("closebtn");
const sideMenu = document.getElementById("sidemenu");
function showSidebar() {
    sideMenu.classList.add("show");
}

function hideSidebar() {
    sideMenu.classList.remove("show");
}

menuButton.addEventListener("click", showSidebar);
closeButton.addEventListener("click", hideSidebar);