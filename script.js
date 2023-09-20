let key = 'ea6027b7c466c1e1111e6912b9773a8e'
let generico_api = 'f20980b4c0a824634e59b3e477ce5a75'
let diferencia = 271.15

let inputUser = document.getElementById('ciudadEntrada');
let buttonSearch = document.getElementById('botonBusqueda');
let divContainer = document.getElementById('datosClima');


buttonSearch.addEventListener('click', () => {
  let city = inputUser.value
  if (city === '' ) {
    alert('ingresa un nombre de una ciudad')
     return
  } else {
    fetchDateClim(city)
  }
 
})


function fetchDateClim(city) {
   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
    .then(data => data.json())
    .then(data => showData(data))
}


function showData(city) {
  divContainer.innerHTML = ''
  
  let country = city.sys.country
  let titleName = city.name
  let stateTemp = city.main.temp
  let iconTime = city.weather[0].icon
  let infoHumidity = city.main.humidity

  let title = document.createElement('h2');
  title.textContent = `${titleName}, ${country}`

  let temp = document.createElement('h2')
  temp.textContent = `La temperatura es: ${parseInt(stateTemp - diferencia)}°C`
  
  let icon = document.createElement('img');
  icon.src = `https://openweathermap.org/img/wn/${iconTime}@2x.png `

  let humidity = document.createElement('h2');
  humidity.textContent = `La humedad es de ${infoHumidity}%`

  divContainer.appendChild(title)
  divContainer.appendChild(temp)
  divContainer.appendChild(icon)
  divContainer.appendChild(humidity)
  
}



































/*
let key = 'ea6027b7c466c1e1111e6912b9773a8e'
let generico_api = 'f20980b4c0a824634e59b3e477ce5a75'
let diferencia = 271.15

let ciudadUsuario = document.getElementById('ciudadEntrada')
let botonBusqueda = document.getElementById('botonBusqueda');

let contenidoClima = document.getElementById('datosClima')



botonBusqueda.addEventListener('click', () => {
   let cuidad = ciudadUsuario.value
    if (cuidad) {
        fetchDatos(cuidad)
    }
})

function fetchDatos(ciudad) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`)
    .then(data => data.json())
    .then(data => datosClima(data))
}


function datosClima(cuidad) {
    console.log(cuidad)
    let contenidoDiv = contenidoClima
    contenidoDiv.innerHTML = '';

    let cuidadNombre = cuidad.name
    let cuidadTemp = cuidad.main.temp
    let cuidadDescription = cuidad.weather[0].description


    let tituloCiudad = document.createElement('h2')
    tituloCiudad.textContent = cuidadNombre

    let tituloTemp = document.createElement('p')
    tituloTemp.textContent = `la temperatura es ${Math.floor(cuidadTemp - diferencia)} Grados`

    let tituloDescription = document.createElement('p')
    tituloDescription.textContent = cuidadDescription

    contenidoDiv.appendChild(tituloCiudad)
    contenidoDiv.appendChild(tituloTemp)
     contenidoDiv.appendChild(tituloDescription)

}*/