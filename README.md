
## Información del proyecto

Bienvenido a mi proyecto de API de Notas.

## Installation

Instalamos todas las dependencias

```bash
$ npm install
```

## Iniciar servidor en modo desarrollo

```bash
$ npm run dev
```

## Iniciar servidor

```bash
$ npm start
```

## Obtener nota

Para obtener un listado de todas las notas se puede pasar el valor undefined en el ID de la nota

```js

const notas = require( './modules/notas' )

notas.getNota( 'id de la nota', function( notas ) {
    // code ... 
} )

```

