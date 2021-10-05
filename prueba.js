
var registros = [];

function agregarRegistro (){
    
    var nombreInput = document.getElementById("CampoNombre");
    var apellidoInput = document.getElementById("CampoApellido");
    var campoUsuarioInput = document.getElementById("campoUsuario");
    var contrasenaInput = document.getElementById("campoContrasena");
    var confirmacionContrasenaInput = document.getElementById("campoConfirmacionContrasena");
    var correoInput = document.getElementById("campoEmail");
    var confirmacionCorreoInput = document.getElementById("CampoConfirmacionEmail");
    var telefonoInput = document.getElementById("CampoTelefono");
    var direccionInput = document.getElementById("CampoDireccion");

    var nuevoRegistro = {
        CampoNombre: nombreInput.value,
        CampoApellido: apellidoInput.value,
        campoUsuario: campoUsuarioInput.value,
        campoContrasena: contrasenaInput.value,
        campoConfirmacionContrasena:confirmacionContrasenaInput.value,
        campoEmail: correoInput.value,
        CampoConfirmacionEmail:confirmacionCorreoInput.value,
        CampoTelefono: telefonoInput.value,
        CampoDireccion: direccionInput.value,
    };

    registros.push(nuevoRegistro);

    alert (registros);
} 

