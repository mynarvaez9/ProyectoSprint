var registros = [];

function agregarRegistro (){
    
    var nombreInput = document.getElementById("CampoNombre");
    var nombre = nombreInput.value;
        alert(nombre);
    var apellidoinput = document.getElementById("CampoApellido");
    var apellido = apellidoinput.value;
        alert(apellido);
    var campoUsuarioInput = document.getElementById("campoUsuario");
    var usuario = campoUsuarioInput.value;
        alert(usuario);
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
        CampoApellido:apellidoinput.value,
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
    document.getElementById("CampoApellido").value = "";
    document.getElementById("campoUsuario").value = "";
    document.getElementById("CampoContrasena").value ="";
    document.getElementById("CampoConfirmacionContrasena").value ="";
    document.getElementById("CampoEmail").value ="";
    document.getElementById("CampoConfirmacionEmail").value ="";
    document.getElementById("CampoTelefono").value ="";
    document.getElementById("CampoDireccion").value = "";

}; 

var registro_apellidos = [{nombre:"Mickey", apellido:"Mouse", usuario:"mickeymouse70", contrasena:"Ratoncito!", confirmacioncontrasena:"Ratoncito!",correo:"mickeymouse@gmail.com",confirmacioncorreo:"mickeymouse@gmail.com",telefono:"01800987456",direccion:"Castillo Disney"},
                          {nombre:"Perla",apellido:"Pico",usuario:"perlapiko2010",contrasena:"Loritaperla_",confirmacioncontrasena:"Loritaperla_",correo:"perlapiko@cinema.com",confirmacioncorreo:"perlapiko@cinema.com", telefono:"023154978",direccion:"Jungla Amazonas"},
                          {nombre:"Speedy",apellido:"Gonzales",usuario:"speedygonzales67",contrasena:"Ratonveloz#",confirmacioncontrasena:"Ratonveloz#",correo:"speedygonzales@gmail.com",confirmacioncorreo:"speedygonzales@gmail.com", telefono:"312479865",direccion:"Rancho Hato Grande"},
                          {nombre:"Shester",apellido:"Bocadillo",usuario:"shester1987",contrasena:"Bocadillo#",confirmacioncontrasena:"Bocadillo#",correo:"shesterbocadillo@gmail.com",confirmacioncorreo:"shesterbocadillo@gmail.com",telefono:"6078954687",direccion:"Granja Dumis"},
                          {nombre:"Olivia",apellido:"Espinaca",usuario:"olivia1960",contrasena:"Flaca1960_",confirmacioncontrasena:"Flaca1960_",correo:"olivia@gmail.com",confirmacioncorreo:"olivia@gmail.com",telefono:"018000987546213",direccion:"Condado las Aceitunas"},
                          {nombre:"Elsa",apellido:"Frozen",usuario:"elsafrozen",contrasena:"Congelada#",confirmacioncontrasena:"Congelada#",correo:"elsafrozen@gmail.com",confirmacioncorreo:"elsafrozen@gmail.com",telefono:"3154879547",direccion:"Castillo de Cristal"},
                          {nombre:"Hanna",apellido:"Frozen",usuario:"hannafrozen",contrasena:"Congelada123#",confirmacioncontrasena:"Congelada123#",correo:"hannafrozen@gmail.com",confirmacioncorreo:"hannafrozen@gmail.com",telefono:"313875146987",direccion:"Condado de olaf"},
                          {nombre:"James",apellido:"Bond",usuario:"jamesbond",contrasena:"Golden123#",confirmacioncontrasena:"Golden123#",correo:"jamesbond@agentesecreto.com",confirmacioncorreo:"jamesbond@agentesecreto.com",telefono:"0198754621",direccion:"Secret Ville"},
                          {nombre:"Mery",apellido:"Moon",usuario:"merymoon",contrasena:"Gaticadulce_",confirmacioncontrasena:"Gaticadulce_",correo:"merymoon@club10.com",confirmacioncorreo:"merymoon@club10.com",telefono:"879651234",direccion:"Granja club 10"},
                          {nombre:"Juan",apellido:"Navarrete",usuario:"juannavarrete",contrasena:"Colmena-",confirmacioncontrasena:"Colmena-",correo:"juannavarrete@elempleo.com",confirmacioncorreo:"juannavarrete@elempleo.com",telefono:"3004457896",direccion:"conjunto Residencial Santa Rita"},
                          {nombre:"Diego",apellido:"Alvira",usuario:"jdiegoalvira",contrasena:"Caracol!",confirmacioncontrasena:"Caracol!",correo:"jdalvira@caracoltv.com.co",confirmacioncorreo:"jdalvira@caracoltv.com.co",telefono:"31578497",direccion:"conjunto Residencial los Almendros"},
                          {nombre:"Alejandro",apellido:"Sanz",usuario:"alejosanzspain",contrasena:"Pisandofuerte_",confirmacioncontrasena:"Pisandofuerte_",correo:"alejosanz@music.com",confirmacioncorreo:"alejosanz@music.com",telefono:"31974589756",direccion:"Condado Barcelona"},
                          {nombre:"Alexander",apellido:"Pirex",usuario:"alexpires77",contrasena:"Balada#1",confirmacioncontrasena:"Balada#1",correo:"alexpires@music.com",confirmacioncorreo:"alexpires@music.com",telefono:"0189561547",direccion:"Condado Brasilia"},
                          {nombre:"Nairo",apellido:"Baez",usuario:"nbaez1991",contrasena:"Corposalud19_",confirmacioncontrasena:"Corposalud19_",correo:"nbaez@corposalud.edu.co",confirmacioncorreo:"nbaez@corposalud.edu.co",telefono:"3218581075",direccion:"La floresta - Barrancabermeja"},
                          {nombre:"Beatriz",apellido:"Pinzon",usuario:"bettypinzon",contrasena:"Contabilidad_",confirmacioncontrasena:"Contabilidad_",correo:"bpinzon@ecomoda.com.co",confirmacioncorreo:"bpinzon@ecomoda.com.co",telefono:"3157895462",direccion:"Los Helechos"},
                          {nombre:"Katherine",apellido:"Ibarguen",usuario:"kattyibarguen",contrasena:"Saltoalto_",confirmacioncontrasena:"Saltoalto_",correo:"kibarguen@ccolimpico.com.co",confirmacioncorreo:"kibarguen@ccolimpico.com.co",telefono:"318456789",direccion:"Vereda Los Frailejones"},
                          {nombre:"Policarpa",apellido:"Salavarrieta",usuario:"polasalavarrieta",contrasena:"Independencia!",confirmacioncontrasena:"Independencia!",correo:"lapola@historiacolombiana.com.co",confirmacioncorreo:"lapola@historiacolombiana.com.co",telefono:"0123654987",direccion:"Finca salavarrieta - Guaduas"},
                          {nombre:"Florentino",apellido:"Ariza",usuario:"ariza100",contrasena:"Macondo100_",confirmacioncontrasena:"Macondo100_",correo:"fariza@macondo.com.co",confirmacioncorreo:"fariza@macondo.com.co",telefono:"21365498",direccion:"Hacienda Macondo"},
                          {nombre:"Lorenzo",apellido:"Piko",usuario:"lorenzopiko",contrasena:"Guacamayo_",confirmacioncontrasena:"Guacamayo_",correo:"lorenzopiko@mundozoo.com.co",confirmacioncorreo:"lorenzopiko@mundozoo.com.co",telefono:"312587468",direccion:"Zoologico mundo loro"},
                          {nombre:"Rebeka",apellido:"Piko",usuario:"rebepiko",contrasena:"Lorareal_",confirmacioncontrasena:"Lorareal_",correo:"rebekapiko@mundozoo.com.co",confirmacioncorreo:"rebekapiko@mundozoo.com.co",telefono:"312587789",direccion:"Zoologico mundo loro"},
                          {nombre:"Clara",apellido:"Luna",usuario:"lunitaclara",contrasena:"Moon2021_",confirmacioncontrasena:"Moon2021_",correo:"lunaclara@music.com.co",confirmacioncorreo:"lunaclara@music.com.co",telefono:"213587498",direccion:"Conjunto los turpiales"},
                          {nombre:"Clarck",apellido:"Kenn",usuario:"clarckenn",contrasena:"Planeta_",confirmacioncontrasena:"Planeta_",correo:"clarckenn@superman.com",confirmacioncorreo:"clarckenn@superman.com",telefono:"987564123",direccion:"SmallVille"}
                        ]

                        