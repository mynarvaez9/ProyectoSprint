function validar_usuario(string) {
    if ((/^\w+([\.-]?)\w+/).test(string)){
        if (string.length<6 && string.length>12){
        
            
            if((/[A-Z]/).test(string.charAt(0))){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    
    }
    else {
        return false;
    }
    
}
function validar_contrasena(string){
    if ((/\!|\@|\#|\-|\_/).test(string)){
        if (string.length<8 && string.length>16){

            
            if((/[A-Z]/).test(string.charAt(0))){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    
    }
    else {
        return false;
    }
}

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
    
} 

module.exports.validar_usuario = validar_usuario;
module.exports.validar_contrasena = validar_contrasena;