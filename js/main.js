
function sortingHat() {

    alert("Juego del Sombrero Seleccionador de Hogwarts.\n¿A qué casa perteneces?");

    let userName;
    while (!userName) {
        userName = prompt("Hola, ¿cómo te llamás?");
        if (!userName) {
            alert("Para continuar, ingresa tu nombre.");
        }
    }

    console.log("Estudiante de Hogwarts:" + " " + userName);

    let userNumber = null;
    while (true) {
        userNumber = parseInt(prompt(userName + ", soy el Sombrero Seleccionador.\n¿Quieres saber a qué casa de Hogwarts perteneces, verdad?\nElije un número del 1 al 4, y veré cuál es tu destino...\nMis respuestas nunca serán las mismas, no podrás engañarme..."));
        if (isNaN(userNumber)) {
            alert("Debes ingresar un número. Recuerda, del 1 al 4.");
        } else if (userNumber >= 1 && userNumber <= 4) {
            break;
        } else {
            alert("Vuelve a intentarlo.\nDebes ingresar un número del 1 al 4.");
        }
    }

    console.log("Número elegido por" + " " + userName + ":" + " " + userNumber);

    let randomHouse;

    if (userNumber === 1) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else if (userNumber === 2) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else if (userNumber === 3) {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    } else (userNumber === 4); {
        const randomNumber = Math.floor(Math.random() * 4) + 1;
        if (randomNumber === 1) {
            randomHouse = "Gryffindor 🦁";
        } else if (randomNumber === 2) {
            randomHouse = "Hufflepuff 🦡";
        } else if (randomNumber === 3) {
            randomHouse = "Ravenclaw 🦅";
        } else {
            randomHouse = "Slytherin 🐍";
        }
    }

    alert("Hmm, difícil. Esto es MUY difícil.");
    console.log("Hmm, difícil. Esto es MUY difícil.");
    alert("Veo que tienes coraje, y una mente muy valiosa.");
    console.log("Veo que tienes coraje, y una mente muy valiosa.");
    alert("Hay talento, sí. Y veo una sed de probarte a ti mismo.");
    console.log("Hay talento, sí. Y veo una sed de probarte a ti mismo.");
    alert("¿Pero, dónde ponerte?...");
    console.log("¿Pero, dónde ponerte?...");
    alert("...YA SÉ!");
    console.log("...YA SÉ!");
    alert("Te pondré en..." + randomHouse.toUpperCase() + "!");
    console.log("Te pondré en..." + randomHouse.toUpperCase() + "!");

}

sortingHat();