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
module.exports.validar_usuario = validar_usuario;
module.exports.validar_contrasena = validar_contrasena;