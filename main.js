const navContenedor = document.querySelector("#hamburger-nav")
const perfilButtons = document.querySelector(".btn-container")

document.getElementById("current-year").textContent = new Date().getFullYear();
function returnMenu() {
    navContenedor.innerHTML = `
    <div class="logo"><p>Lautaro Severino</p></div>
    <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="abrirMenu()">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="menu-links">
            <li><a href="#sobre-mi" onclick="abrirMenu()">Sobre mi</a></li>
            <li><a href="#conocimientos" onclick="abrirMenu()">Conocimientos</a></li>
            <li><a href="#proyectos" onclick="abrirMenu()">Proyectos</a></li>
            <li><a href="#contacto" onclick="abrirMenu()">Contacto</a></li>
        </div>
    </div>`
}

function abrirMenu() {
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")

}

function abrirVentanaCV() {
    perfilButtons.innerHTML = `
    <button class="btn btn-color-1" onclick="window.open('./assets/Curriculum_Vitae.pdf')">Descargar CV</button>
    <button class="btn btn-color-2" onclick="location.href='#contacto'">Contacto</button>`
}


abrirVentanaCV()
returnMenu()

