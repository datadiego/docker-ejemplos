# express learning

Repositorio básico para aprender fundamentos de backend con Express.js

## Endpoints

### GET /

Devuelve un mensaje de bienvenida.

### /metodos

Este grupo de endpoints sirve para probar los métodos HTTP.

#### GET /metodos

Prueba de que puedes mandar una petición GET a un endpoint.

#### POST /metodos

Prueba de que puedes mandar una petición POST a un endpoint.

#### PUT /metodos

Prueba de que puedes mandar una petición PUT a un endpoint.

#### DELETE /metodos

Prueba de que puedes mandar una petición DELETE a un endpoint.

### /query

Este grupo de endpoints sirve para probar los query parameters.

Estos parámetros se mandan en la URL después del signo de interrogación, por ejemplo `http://localhost:3000/query?nombre=Juan&apellido=Pérez`

#### GET /query

Devuelve un objeto con los datos almacenados que se mandaron a través de `POST /query`.

#### POST /query

Almacena los datos que se mandaron a través de la *URL*. Estos datos se pueden recuperar a través de `GET /query`.

#### DELETE /query

Elimina los datos almacenados que se mandaron a través de `POST /query`.



### /params

Este grupo de endpoints sirve para probar los parametros de ruta.

Estos parámetros se mandan en la URL después de un slash, por ejemplo `http://localhost:3000/params/valor1/valor2`

#### GET /params/:param1/:param2

Devuelve un objeto con los datos enviados a través de `POST /params/:param1/:param2`.

#### POST /params/:param1/:param2

Almacena los datos enviados a través de este mismo endpoint. Estos datos se pueden recuperar a través de `GET /params/:param1/:param2`.