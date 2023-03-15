let nombre, correo, mensaje;

let formulario = document.getElementById("form")
formulario.addEventListener("submit", (e)=>{
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById("nombre").value
    correo = document.getElementById("correo").value
    mensaje = document.getElementById("textarea").value
    console.log(nombre)
    console.log(correo)
    console.log(mensaje)
}

function ValidarData (nombre,correo,mensaje) {
    if(nombre.length==0 || correo.length==0 || mensaje,length==0){

        swal.fire({
            title: "error!",
            Text: "do you want to continue",
            icon: "error",
            confirmButtonText:"cool",
            iconColor: "red",
        })
    }
}