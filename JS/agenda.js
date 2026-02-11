let datos = [];
let seguir = true;

while (seguir) {
    let option = parseInt(prompt("Seleccione una de las siguientes opciones: \n1-Agregar \n2-Listar \n3-Salir"));
    
    switch(option) {
        case 1:
            alert("Escogiste Agregar");
            let nombre = prompt("Ingresa tu nombre");
            datos.push(nombre);
            console.table(datos);
            break;

        case 2:
            alert("Escogiste Listar");
            document.write(getElements());
            break;

        case 3:
            alert("Escogiste Salir");
            seguir = false;
            break; 

        default:
            alert("No recibí una opción válida");
            break;
    }
}

function getElements() {
    let result = "";

    for (let i = 0; i < datos.length; i++) {
        result += datos[i] + "<br>";
    }

    return result;
}
