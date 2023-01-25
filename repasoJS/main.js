var nombre = "Fabian Venegas";
var altura = 187;
/*
var concatenacion = nombre + " " + altura;

var datos = document.getElementById("datos");
datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm</h3>
`;

if (altura < 180) {
    datos.innerHTML += '<h1>No eres muy alto</h1>';
} else {
    datos.innerHTML += '<h1>Eres bastante alto</h1>';
}

for (var i = 2010; i <= 2020; i++) {
    //bloque de instrucciones
    datos.innerHTML += "<h2>Estamos en el año: " + i + "</h2>";
}
*/

imprimir();

document.write('<h1>Listado</h1>')
var nombres = ['Victor', 'Antonio', 'Joaquin'];
/*
for (var i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + '<br/>');
}*/

nombres.forEach((nombre) => {
    document.write(nombre + '<br/>')
});


var auto = {
    modelo: 'Mercedez AAA',
    velmax: '500',
    antiguedad: '2020',
    mostrarDatos() {
        console.log(this.modelo, this.velmax, this.antiguedad);
    }
};

document.write('<h1>'+auto.velmax+'</h1>')
auto.mostrarDatos();
console.log(auto);

var saludar = new Promise((resolve, reject) => {
    setTimeout(() =>{
        let saludo = "Hola, mundo!";
        saludo = false;
        if (saludo) {
            resolve(saludo);
        } else {
            reject('No hay saludo :(');
        }
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err => {
    alert(err);
});























function muestraNombre (nombre, altura) {
    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm</h3>
    `;
    return misDatos;
}

function imprimir () {
    var datos = document.getElementById("datos");
    datos.innerHTML = muestraNombre("lucho perez", 190); 
}