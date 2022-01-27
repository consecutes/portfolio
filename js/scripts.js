const darkModeToggle = document.getElementById("darkModeToggle");
const iconosSol = darkModeToggle.getElementsByClassName("fa-sun");
const iconosLuna = darkModeToggle.getElementsByClassName("fa-moon");

darkModeToggle.addEventListener("click", () => {
    const [iconoSol] = iconosSol
    const [iconoLuna] = iconosLuna
    if(iconosSol.length != 0){
        iconoSol.classList.add("animate__animated", "animate__rotateOut");
    }else if(iconosLuna.length != 0){
        iconoLuna.classList.remove("fa-moon");
        iconoLuna.classList.add("fa-sun");
    }
});

darkModeToggle.addEventListener("animationend", () => {
    const [iconoSol] = iconosSol
    const [iconoLuna] = iconosLuna
    if(iconoSol.classList.contains("animate__rotateOut")){
        iconoSol.classList.remove("animate__animated", "animate__rotateOut");
        iconoSol.classList.remove("fa-sun");
        iconoSol.classList.add("fa-moon");
        iconoLuna.classList.add("animate__animated", "animate__rotateIn");
    }else if(iconoSol.classList.contains("animate__rotateIn")){
        iconoSol.classList.remove("animate__animated", "animate__rotateIn");
        iconoSol.classList.remove("fa-moon");
        iconoSol.classList.add("fa-moon");
    }
})