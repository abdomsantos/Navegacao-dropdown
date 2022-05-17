/*Abrir e fechar o menu mobile*/

let show = true;

const menuSection = document.querySelector(".menu")
const iconMenu = menuSection.querySelector(".icon-menu")
const iconclose = menuSection.querySelector(".icon-close-menu")

iconMenu.addEventListener("click", () => {

	menuSection.classList.add("on", show)
})

iconclose.addEventListener("click", () => {

	menuSection.classList.remove("on", show)
})

