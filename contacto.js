const send = document.getElementById('sendMessage');
var email = document.getElementById("formulario_email_input");
var motivo = document.getElementById("formulario_motivo_input");
var contenido = document.getElementById("formulario_content_input");

function sending(){
    email = email.value;
    motivo = motivo.value; 
    contenido = contenido.value;
    if(email == "" && motivo == "" && contenido == ""){
        swal({
            icon: "error",
            text: "Ingrese parámetros validos"
          });
    }
    else if (email != "" && motivo != "" && contenido != ""){
        swal({
            icon: "success",
            text: "Solicitud Enviada"
          });
    }
    else{
        swal({
            icon: "error",
            text: "Ingrese parámetros validos"
          });
    }
    email = document.getElementById("formulario_email_input");
    motivo = document.getElementById("formulario_motivo_input");
    nombre = document.getElementById("formulario_nombre_input");
    contenido = document.getElementById("formulario_content_input");
}