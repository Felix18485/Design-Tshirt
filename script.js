let divImagen = document.getElementById("big-img");
let imagenLuffy = document.getElementById("luffy");
let imagenZoro = document.getElementById("zoro");
let imagenChopper = document.getElementById("chopper");
let imagenSanji = document.getElementById("sanji");
let radioBlack = document.getElementById("black");
let radioWhite = document.getElementById("white");
let divCamisetas = document.getElementById("camisetas");
let inputTitulo = document.getElementById("inputTitulo");
let label = document.getElementById("palabra");
let ejey = document.getElementById("ejey");
let ejex = document.getElementById("ejex");

//Obtenemos todas las imagenes que hay en el html
let imagenes = document.querySelectorAll("img");

//Recorremos todas las imagenes y le añadimos el evento
//dragstart a cada una 
imagenes.forEach(element => {
    element.addEventListener("dragstart", (event) => {
        console.log("iniciando")
        event.dataTransfer.setData("text/plain", event.target.src);
    })
});


divImagen.addEventListener("dragover", (event) => {
    event.preventDefault();
})

//Añadimos el evento drop al div en el que pondremos la camiseta
divImagen.addEventListener("drop", (event) => {
    let divLittle = document.getElementById("little-img");
    let imagenSrc = event.dataTransfer.getData("text/plain");
    let imagen = document.createElement("img");
    let imagenLittle = document.createElement("img");
    let labelPersonaje = document.getElementById("nombrePersonaje");
    imagenLittle.setAttribute("class", "little-style");
    imagen.setAttribute("src", imagenSrc);
    imagenLittle.setAttribute("src", imagenSrc);
    
    //En el caso de que vayamos a poner una imagen y ya
    //hubiese una borramos la anterior de ambos contenedores
    if (divImagen.children.length > 0) {
        divImagen.removeChild(divImagen.children[0]);
        divLittle.removeChild(divLittle.children[0]);
    }

    //Añadimos la imagen a los contenedores
    divImagen.appendChild(imagen);
    divLittle.appendChild(imagenLittle);

    //Preguntamos si en el src viene el nombre del personaje
    //para saber que imagen viene y poner el nombre adecuado
    if (imagenSrc.includes("luffy")) {
        labelPersonaje.textContent = "Luffy";
    } else if (imagenSrc.includes("chopper")) {
        labelPersonaje.textContent = "Chopper";
    } else if (imagenSrc.includes("sanji")){
        labelPersonaje.textContent = "Sanji";
    }else if (imagenSrc.includes("zoro")){
        labelPersonaje.textContent = "Zoro";
    }
})

//Añadimos un evento onclick a ambos radio para cambiar la
//imagen de la camiseta que se vera
radioBlack.addEventListener("click", () => {
    divCamisetas.setAttribute("class", "camisetaNegra");
})

radioWhite.addEventListener("click", () => {
    divCamisetas.setAttribute("class", "camisetaBlanca");
})

//Se le añade un evento input para que te actualice el valor al instante
//porque si lo hago con un keydown el ultimo valor no se actualiza
inputTitulo.addEventListener("input", (event) => {
    //Expresion regular que permite cualquier tipo de caracter pero 
    //solo un maximo de 10 caracteres
    let regex = /^.{0,10}$/;
    if (!regex.test(event.target.value)){
        alert("El titulo no puede tener mas de 10 caracteres");
        //En el caso de que hay mas de 10 caracteres se elimina el ultimo caracter
        //y se actualiza el valor del input
       let inputModificado = event.target.value.substring(0, event.target.value.length - 1);
        event.target.value = inputModificado;
    }
    //Se iguala el valor del label con el del input
    label.textContent = inputTitulo.value;
})

//Se añade un evento al range ejey para que modifique el marginTop
ejey.addEventListener("input", () => {
    label.style.marginTop = ejey.value + "px";
})

//Se añade un evento al range ejex para que modifique el marginLeft
ejex.addEventListener("input", () =>{
    label.style.marginLeft = ejex.value + "px";
})



