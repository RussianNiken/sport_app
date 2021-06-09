# sport_check

# OJO

Para poder ejecutar la app se necesitan dos cosas previas:

* El PC que ejecuta tanto el server como la BD tiene que tener IP local 192.168.1.150, 
de esta forma se puede emplear "https://pc.lony.xyz:3000" para acceder a la app.

* Se tiene que añadir el certificado al navegador. El fichero es "ca.pem".
	* En android hay que pasar el certificado al dispositivo y después en Ajustes (del dispositivo) hay que añadirlo.
	No funciona con Firefox pero si con Edge, debería funcionar con Chrome.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
