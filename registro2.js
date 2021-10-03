let registros = [];

function agregarRegistro(){
    const nombre = document.getElementById("in_usuario")
    const pass = document.getElementById("in_contrasena")
    let user_valid = validar_nombreUsuario(nombre);
    let contra_valid= validar_contrasena(pass);
    if (user_valid && contra_valid) {
        var usu_nuevo = document.getElementById("in_usuario").value
        var contra_nuevo = document.getElementById("in_contrasena").value
        var reg_nuevo = {usuario: usu_nuevo, contrasena: contra_nuevo};
        registros.push(reg_nuevo);
        console.log(registros)
  
    }

}

function filtrarPorContrasena(arreglo,filtro){
        let res_filtro = arreglo.filter(p => p.contrasena.length <= filtro);
        console.log(res_filtro)
        return res_filtro;

}

function validar_nombreUsuario(string) {
    var alfanum = /^[0-9a-zA-Z]+$/;
    let warnings = "";
    let bandera = false;
    
    if ((string.value.length < 4) || (string.value.length > 9) || (!string.value.match(alfanum))) {
      warnings = 'El nombre de Usuario no es válido';
      bandera = true;
    } else {
      return true;
    }
    if (bandera){
   
    }
    return false;
  }

  function validar_contrasena(string) {
    
    var alfanum = /^[a-zA-Z\d]+$/;
    let warnings = "";
    let bandera = false;
   
    if ((string.value.length < 6) && (string.value.length > 16) ){
      warnings += 'La contraseña no es válida';
      bandera = true;
    } else {
      return true;
    }
    if (bandera){
   
    }
    return false;
  }

module.exports ={registros,filtrarPorContrasena,agregarRegistro};




function ordenarArreglo_Apellido(arreglo){
var arreglo =new Array();
arreglo.push(arreglo)


}

function retornarRegistroMedio(args){

}

module.exports.ordenarArreglo_Apellido = ordenarArreglo_Apellido();
module.exports.ordenarArreglo_Apellido = retornarRegistroMedio();