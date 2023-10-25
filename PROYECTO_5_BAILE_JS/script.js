let esqueleto = "off";
const esqueletoHtml = document.getElementById("esqueletoQuieto");
const botonSonido = new Audio("../sound/botonBailar.mp3")
const botonMusica = new Audio("../sound/audio.mp3")
const bailar = () => {
    if(esqueleto === "off"){
        esqueleto = "on"
        console.log("On")
        esqueletoHtml.classList.add("on")
        esqueletoHtml.addEventListener("click", () =>{
            botonSonido.play()
        })
        esqueletoHtml.addEventListener("click", () =>{
            botonMusica.play()
        })
    }else{
        esqueletoHtml.addEventListener("click", () =>{
            botonMusica.pause()
        })
        esqueleto = "off"
        console.log("Off")
        esqueletoHtml.classList.remove("on")
    }
};