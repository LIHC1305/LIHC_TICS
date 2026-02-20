let datos = [];
let seguir = true;

while(seguir){

    let opcion = parseInt(prompt(
        "Bienvenido a tu agenda personal \n" +
        "1. Agregar contacto \n" +
        "2. Listar contactos \n" +
        "3. Salir \n" +
        "4. Borrar contacto"
    ));

    switch(opcion) {

        case 1:
            let nombre = prompt("Ingresa tu nombre");
            let telefono = prompt("Ingresa tu telefono");
            let correo = prompt("Ingresa tu correo");
            let edad = parseInt(prompt("Ingresa tu edad"));
            let id = parseInt(datos.length + 1);

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
            let b = parseInt(prompt("Ingresa el id del contacto que deseas borrar"));
            let eliminado = false;
            
            if (datos.length === 0) {
                alert("No hay contactos registrados");
                break;
            }

            for (let i = 0; i < datos.length; i++) {
                if (datos[i].id === b) {
                    datos.splice(i, 1); // indice que indica la eliminacion de un elemento (1) desde la posición (i)

                    for (let j = i; j < datos.length; j++) {
                        datos[j].id = datos[j].id - 1;
                    }
                    eliminado = true;
                    break;
                }
            }

            if (eliminado) {
                alert("Contacto eliminado correctamente");
            } else {
                alert("No existe un contacto con ese ID");
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