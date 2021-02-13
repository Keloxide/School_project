//alert("We up for Greatness!!");

const homeContainer = document.querySelector(".main-home-container");
const aboutContainer = document.querySelector(".about-container");
const albumContainer = document.querySelector(".album-container");
const homeButton = document.querySelector(".main-header-btn");
const aboutBtn = document.querySelector(".about-btn");
const albumBtn = document.querySelector(".album-btn");
const menuClose = document.querySelector(".close-btn");
const homeMenu = document.querySelector(".home-menu");
const aboutMenu = document.querySelector(".about-menu");
const albumMenu = document.querySelector(".album-menu");
const responsiveNavContainer = document.querySelector(".responsive-nav-container");
/* home nav */
/*const mainHome = document.querySelector(".main-home");
mainHome.addEventListener("click", () => {
    homeContainer.style.display = "grid";
});*/

const mainAbout = document.querySelector(".main-about");
mainAbout.addEventListener("click", () => {
    homeContainer.style.display = "none";
    aboutContainer.style.display = "grid";
});

const mainAlbum = document.querySelector(".main-photos");
mainAlbum.addEventListener("click", () => {
    homeContainer.style.display = "none";
    albumContainer.style.display = "grid";
});
/* end of home nav */

/* about nav */
const aboutHome = document.querySelector(".about-home");
aboutHome.addEventListener("click", () => {
    aboutContainer.style.display = "none";
    homeContainer.style.display = "grid";
});

/*
const aboutAbout = document.querySelector(".about-about");
aboutAbout.addEventListener("click", () => {
    aboutContainer.style.display = "grid";
});
*/

const aboutAlbum = document.querySelector(".about-photos");
aboutAlbum.addEventListener("click", () => {
    aboutContainer.style.display = "none";
    albumContainer.style.display = "grid";
});
/* end of about nav */

/* album nav */
const albumHome = document.querySelector(".album-home");
albumHome.addEventListener("click", () => {
    albumContainer.style.display = "none";
    homeContainer.style.display = "grid";
});

const albumAbout = document.querySelector(".album-about");
albumAbout.addEventListener("click", () => {
    albumContainer.style.display = "none";
    aboutContainer.style.display = "grid";
    
});
/* end of about nav */

/* album nav */

/*
const albumAlbum = document.querySelector(".album-photos");
albumAlbumm.addEventListener("click", () => {
    albumContainer.style.display = "grid";
});
*/
/* end of album nav */

const navHome = document.querySelector(".nav-home");
navHome.addEventListener("click", () => {
    responsiveNavContainer.style.display = "none";
    albumContainer.style.display = "none";
    aboutContainer.style.display = "none";
    homeContainer.style.display = "grid";
});

const navAbout = document.querySelector(".nav-about");
navAbout.addEventListener("click", () => {
    responsiveNavContainer.style.display = "none";
    homeContainer.style.display = "none";
    albumContainer.style.display = "none";
    aboutContainer.style.display = "grid";
});

const navPhotos = document.querySelector(".nav-photos");
navPhotos.addEventListener("click", () => {
    responsiveNavContainer.style.display = "none";
    homeContainer.style.display = "none";
    aboutContainer.style.display = "none";
    albumContainer.style.display = "grid";
});

homeButton.addEventListener("click", () => {
    homeContainer.style.display = "none";
    aboutContainer.style.display = "grid";
});

aboutBtn.addEventListener("click", () => {
    aboutContainer.style.display = "none";
    homeContainer.style.display = "none";
    albumContainer.style.display = "grid";
});

albumBtn.addEventListener("click", () => {
    albumContainer.style.display = "none";
    aboutContainer.style.display = "none";
    homeContainer.style.display = "grid";

});

menuClose.addEventListener("click", () => {
    responsiveNavContainer.style.display = "none";
    
});

homeMenu.addEventListener("click", () => {
    responsiveNavContainer.style.display = "block";
});

aboutMenu.addEventListener("click", () => {
    responsiveNavContainer.style.display = "block";
});

albumMenu.addEventListener("click", () => {
    responsiveNavContainer.style.display = "block";
});