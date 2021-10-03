
## Información del proyecto

Bienvenido a mi proyecto de API de Notas.

## Instalación

Instalamos todas las dependencias y el script de postinstalación.

```bash
$ npm install
```

###### Script de postinstalación

Este script crea enlaces simbólicos de los módulos de la app en la carpeta node_modules para poder importarlos sin rutas relativas en el proyecto. 
Si el comando anterior no ha ejecutado el script de postinstalación, hay que ajecutarlo manualmente.

```bash
$ npm install postinstall
```

## Iniciar servidor en modo desarrollo

```bash
$ npm run dev
```

La aplicación corre sobre el puerto 3001, para cerrar este puerto una vez cerrada la app:

```bash
$ npm run killport
```

## Iniciar servidor en modo producción

```bash
$ npm start
```

## Variables de entorno

Las variables de entorno se guardan en el fichero **.env** en la raiz del repositorio. Las variables que se usan son las siguientes:
- PORT: Puerto en el que se ejecuta la app.
- KEY_FILE: Ruta del fichero con las claves de usuario de la API.
- DATA_FILE: Ruta del fichero con las notas.
- CSV_SEPARATOR: Separador de datos en los ficheros CSV. **(Esta variable de entorno se eliminará en futuras versiones)**

## Funciones

###### Obtener nota

Para obtener un listado de todas las notas se puede pasar el valor undefined en el ID de la nota

```js

const notas = require( './modules/notas' )

```

```js

notas.getNota( id_de_la_nota, function( notas ) {
    // code ... 
} )

```

###### Publicar nota

Para publicar una nota hay que pasar a la función postNota los siguientes parámetros mediante el método GET:

- título
- descripcion
- estado
- user

Tanto la fecha como el id de la nota los asignará la API automaticamente

```js

const notas = require( '../modules/notas' )

```

```js

notas.postNota( datos_de_la_nota, function( notas ) {
    // code ...
} )

```

###### Eliminar nota

Para eliminar una nota hay pasar mediante el método GET el id de la nota a la función deleteNota().

```js

const notas = require( '../modules/notas' )

```

```js

notas.deleteNota( id_de_la_nota, function( notas ) {
    // code ...
} )

```

## Futuras actualizaciones

- Funcionalidad de API Keys para los usuarios
- Eliminar varias notas a la vez