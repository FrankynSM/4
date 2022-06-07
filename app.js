// template strings
const nombre = 'Frank'
const trabajo = 'Desarrollador Web'

// Concatenar JavaScript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo)
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`)

// Concatenar con múltiples lineas
const contenedorApp = document.querySelector('#app')
// let html = '<ul>' +
//                 '<li> Nombre: '+ nombre +'</li>' +
//                 '<li> Trabajo: ' + trabajo +'</li>' +
//             '</ul>'

let html = `
            <ul>
                <li> Nombre: ${nombre} </li>
                <li> Trabajo: ${trabajo} </li>
            </ul>
`

contenedorApp.innerHTML = html
