let datos = [];
let seguir = true;

while(seguir){

    let opcion = parseInt(prompt(
        "Bienvenido a tu agenda personal \n" +
        "1. Agregar contacto \n" +
        "2. Listar contactos \n" +
        "3. Salir \n" +
        "4. Buscar por ID"
    ));

    switch(opcion) {

        case 1:
            let nombre = prompt("Ingresa tu nombre");
            let telefono = prompt("Ingresa tu telefono");
            let correo = prompt("Ingresa tu correo");
            let edad = parseInt(prompt("Ingresa tu edad"));
            let id = datos.length + 1;

            let agenda = { nombre, telefono, correo, edad, id };

            datos.push(agenda);

            alert(`Contacto correctamente agregado. \n Tu id es: ${id}`);
            break;

        case 2:
            let todos = "";

            for(let i = 0; i < datos.length; i++){
                todos += "Nombre: " + datos[i].nombre + "\n";
                todos += "Telefono: " + datos[i].telefono + "\n";
                todos += "Correo: " + datos[i].correo + "\n";
                todos += "Edad: " + datos[i].edad + "\n\n";
                todos += "ID: " + datos[i].id + "\n\n";
            }

            if(datos.length === 0){
                alert("No hay contactos registrados");
            } else {
                alert(todos);
            }
            break;

        case 3:
            if(confirm("¿Deseas salir?")){
                seguir = false;
            }
            break;

        case 4:
            let a = parseInt(prompt("Ingresa el ID que deseas buscar"));
            let respuesta = "";
            let encontrado = false;

            if (datos.length === 0) {
                alert("Todavía no hay contactos registrados");
                break;
            }

            for (let i = 0; i < datos.length; i++) {
                if (datos[i].id === a) {
                    respuesta += "ID: " + datos[i].id + "\n";
                    respuesta += "Nombre: " + datos[i].nombre + "\n";
                    respuesta += "Telefono: " + datos[i].telefono + "\n";
                    respuesta += "Correo: " + datos[i].correo + "\n";
                    respuesta += "Edad: " + datos[i].edad + "\n";

                    encontrado = true;
                    break;
                }
            }

            if (encontrado) {
                alert(respuesta);
            } else {
                alert("No existe un contacto con este ID");
            }

            break;

        default:
            alert("No recibí una opción válida");
    }
}

/*
    agenda.id_contacto = id_contacto;
    agenda.nombre = nombre;
    agenda.edad = edad;
    agenda.telefono = telefono;
*/