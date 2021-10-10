
var registros = [];

function agregarRegistro (){
    
    var nombreInput = document.getElementById("CampoNombre");
    var nombre = nombreInput.value;
        alert("Nombre Válido");
    var campoUsuarioInput = document.getElementById("campoUsuario");
    var usuario = campoUsuarioInput.value;
        alert("Usuario Válido");
    var contrasenaInput = document.getElementById("CampoContrasena");
    var contrasena = contrasenaInput.value;
        alert("Contraseña válida");
    var confirmacionContrasenaInput = document.getElementById("CampoConfirmacionContrasena");
    var confirmacion = confirmacionContrasenaInput.value;
        alert("Contraseña Válida");
    var correoInput = document.getElementById("CampoEmail");
    var correo =correoInput.value;
        alert(correo); 
    var confirmacionCorreoInput = document.getElementById("CampoConfirmacionEmail");
    var confcorreo = confirmacionCorreoInput.value;
        alert(confcorreo);
    var telefonoInput = document.getElementById("CampoTelefono");
    var telefono =  telefonoInput.value;
        alert(telefono);
    var direccionInput = document.getElementById("CampoDireccion");
    var direccion = direccionInput.value;
        alert(direccion);

    var nuevoRegistro = {
        CampoNombre: nombreInput.value,
        campoUsuario: campoUsuarioInput.value,
        campoContrasena: contrasenaInput.value,
        campoConfirmacionContrasena:confirmacionContrasenaInput.value,
        campoEmail: correoInput.value,
        CampoConfirmacionEmail:confirmacionCorreoInput.value,
        CampoTelefono: telefonoInput.value,
        CampoDireccion: direccionInput.value,
    };

    registros.push(nuevoRegistro);
    console.log(registros);

    document.getElementById("CampoNombre").value = "";
    document.getElementById("campoUsuario").value = "";
    document.getElementById("CampoContrasena").value ="";
    document.getElementById("CampoConfirmacionContrasena").value ="";
    document.getElementById("CampoEmail").value ="";
    document.getElementById("CampoConfirmacionEmail").value ="";
    document.getElementById("CampoTelefono").value ="";
    document.getElementById("CampoDireccion").value = "";

}; 




