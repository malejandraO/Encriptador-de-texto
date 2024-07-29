


function botonEncriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == ""){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "El campo esta vacío" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else if (texto != txt){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "No debe contener acentos ni caracteres especiales" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else if (texto != texto.toLowerCase()){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "El texto no debe contener mayúsculas" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        document.querySelector(".salida__mensaje").innerHTML = texto;
        document.querySelector (".boton__Copiar").style.visibility = "inherit"
        document.querySelector(".contenedor__salida").remove();
    }

}

function botonDesencriptar(){
    let texto = document.getElementById("textoUsuario").value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " ");

    if (texto == ""){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "El campo esta vacío" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else if (texto != txt){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "No debe contener acentos ni caracteres especiales" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else if (texto != texto.toLowerCase()){
        document.querySelector(".texto__terminos").style.background ="#BBE9FF";
        document.querySelector(".texto__terminos").style.color = "#FF0000";
        document.querySelector(".texto__terminos").style.fontWeight = "800";
        document.querySelector(".texto__terminos").textContent = "El texto no debe contener mayúsculas" 

        setTimeout(() => {
            document.querySelector(".texto__terminos").removeAttribute("style")
        }, 1500);
    }

    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        document.querySelector(".salida__mensaje").innerHTML = texto; /*muestra el texto en .salida__mensaje*/
        document.querySelector (".boton__Copiar").style.visibility = "inherit" /*pone visible el boton*/
        document.querySelector(".contenedor__salida").remove(); /*remueve lo que hay en el contenedor*/

    }

}

function botonCopiar(){
    let copiar = document.querySelector(".salida__mensaje");
    copiar.select();
    document.execCommand("copy"); /*copia lo que hay en el textarea .salida__mensaje*/
    
}
