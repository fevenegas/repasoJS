class Automovil {
    constructor(modelo, velocidad, antiguedad) {
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }

    aumentarVelocidad () {
        this.velocidad += 1;
    }

    reducirVelocidad () {
        this.velocidad -= 1;
    }
}

class Autobus extends Automovil {
    constructor(modelo, velocidad, antiguedad) {
        super(modelo, velocidad, antiguedad);
        this.altura = 5;
    }

    mostrarAltura() {
        return "La altura del bus es: "+ this.altura;
    }
}

var bus1 = new Autobus('PEGASUS', 200, 2017);
console.log(bus1.mostrarAltura());

var auto1 = new Automovil('Kia', 200, 2018);
var auto2 = new Automovil('Chevrolet', 220, 2015);
var auto3 = new Automovil('Suzuki', 180, 2020);

document.write("<h1>Velocidad:"+auto1.velocidad+"</h1>");
auto1.aumentarVelocidad();
auto1.aumentarVelocidad();
auto1.aumentarVelocidad();
document.write("<h1>Velocidad:"+auto1.velocidad+"</h1>");