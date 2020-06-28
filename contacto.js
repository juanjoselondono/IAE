const send = document.getElementById('sendMessage');
var email = document.getElementById("formulario_email_input");
var motivo = document.getElementById("formulario_motivo_input");
var contenido = document.getElementById("formulario_content_input");

function sending(){
    email = email.value;
    motivo = motivo.value; 
    if(email == "" && motivo == ""){
        swal({
            icon: "error",
            text: "Ingrese parámetros validos"
          });
    }
    else{
        swal({
            icon: "success",
            text: "Solicitud Enviada"
          });
    }
    email = document.getElementById("formulario_email_input");
    motivo = document.getElementById("formulario_motivo_input");
    nombre = document.getElementById("formulario_nombre_input");
    contenido = document.getElementById("formulario_content_input");
}