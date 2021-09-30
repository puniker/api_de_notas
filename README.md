
```js
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
```

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

```js

const notas = require( './modules/notas' )

notas.getNota( 'id de la nota', function( notas ) {
    // code ... 
} )

```

