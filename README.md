# Pruebas automatizadas con Jest

Escribir un simulador de robot.

Las instalaciones de prueba de una fábrica de robots necesitan un programa para verificar los movimientos de los robots.

Los robots tienen tres posibles movimientos:

- Gire a la derecha
- Gire a la izquierda
- avance

Los robots se colocan en una cuadrícula infinita hipotética, frente a una determinada
dirección (norte, este, sur u oeste) en un conjunto de coordenadas {x,y}.

Luego, el robot recibe una serie de instrucciones, momento en el cual la
instalación de prueba verifica la nueva posición del robot, y en que
dirección apunta.

La cadena de letras "RAALAL" significa:

- Girar a la derecha
- Avanzar dos veces
- Girar a la izquierda
- Avanzar una vez
- Gire a la izquierda una vez más

Digamos que un robot comienza en {7, 3} mirando al norte. Luego, ejecutar esta secuencia de instrucciones debe dejarlo en {9, 4} mirando al oeste.

Crear un proyecto de NPM.
Instalar Jest como dependencia de desarrollo.
Crear un archivo robot.js que exporta una función createRobot.
Crear un archivo robot.test.js con las pruebas automatizadas para robot.js.

Intentar TDD en esta misión.

Sólo tienen que crear pruebas automatizadas para el createRobot y alguno de los movimientos.

```js
exports.createRobot(x, y) {
 let x = "coordenada en x";
 let y = "coordenada en y";
 let orientation = "N" // dirección a la que apunta el robot "N", "E", "S", "W"

 function advance() {
   // función para avanzar
 }

 function turnRight() {
   // función para girar a la derecha
 }

 function turnLeft() {
   // función para girar a la izquierda
 }

 function instructions() {
   // función para recibir una serie de instrucciones Ejm: "RAALAL"
 }


getPosition() {
 // metodo para adquirir la posición
}

}
```
