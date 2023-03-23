let pdv, mdv, pl, tdv, fecha, hora, cantidad;

let formulario = document.getElementById('con')

formulario.addEventListener('submit', (e) => {
  e.preventDefault()
  LeerData()
})

function LeerData() {
  pdv = document.getElementById('pdv').value;
  mdv = document.getElementById('mdv').value;
  pl = document.getElementById('pl').value;
  tdv = document.getElementById('tdv').value;
  fecha = document.getElementById('f').value;
  hora = document.getElementById('hdi').value;
  cantidad = document.getElementById('cdt').value;
  ValidarData(pdv, mdv, pl, tdv, fecha, hora, cantidad)
  GuardarLocalStorage(pdv, mdv, pl, tdv, fecha, hora, cantidad)

}

function ValidarData(pdv, mdv, pl, tdv, fecha, hora, cantidad) {
  if (pdv.length == 0 || mdv.length == 0 || pl.length == 0 || tdv.length == 0 || fecha.length == 0 || hora.length == 0 || cantidad.length == 0) {
    let timerInterval
    Swal.fire({
      title: 'Porfavor completa los campos para enviar!',
      html: 'Espera ⏰<b></b> ',
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }

    })
  }
}

function GuardarLocalStorage(pdv, mdv, pl, tdv, fecha, hora, cantidad) {
  localStorage.setItem('pdv', pdv)
  localStorage.setItem('mdv', mdv)
  localStorage.setItem('pl', pl)
  localStorage.setItem('tdv', tdv)
  localStorage.setItem('fecha', fecha)
  localStorage.setItem('hora', hora)
  localStorage.setItem('cantidad', cantidad)
  ListarData()
}

function ListarData() {
  let Usu = localStorage.getItem('pdv')
  let modeloUsu = localStorage.getItem('mdv')
  let placaUsu = localStorage.getItem('pl')
  let tipoDeVehiculo = localStorage.getItem('tdv')
  let FechaDeEntrada = localStorage.getItem('fecha')
  let HoraDeInicio = localStorage.getItem('hora')
  let CantidaDeHoras = localStorage.getItem('cantidad')
}