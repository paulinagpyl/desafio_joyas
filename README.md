# G51 - Clase Api Avanzada

# Integrantes:
# Paulina González
# Esteban Olivares
# Cristian Pozo

Crear una API REST con paginación, ordenamiento y filtros de registros alojados en PostgreSQL.

- Especificar el límite de registros que se obtiene al consultar una ruta GET de una API REST
- Ordenar los registros de una API en base a query strings
- Paginar los registros que se devuelven en una consulta GET de una API REST
- Filtrar los registros que se devuelven en base a los parámetros recibidos en la query strings

# Estructura

desafio_joyas/
│
├── .env.example
├── .gitignore
├── database/
│   ├── DDL.sql
│   └── DML.sql
│
├── index.js
├── LICENSE.md
├── package.json
├── README.md
│
└── src/
    └── server/
        ├── app.js
        │
        ├── controllers/
        │   ├── errors.controller.js
        │   └── inventario.controller.js
        │
        ├── database/
        │   └── db_connect.js
        │
        ├── middlewares/
        │   └── serverLog.middleware.js
        │
        ├── models/
        │   └── inventario.model.js
        │
        └── routers/
            ├── errors.router.js
            ├── index.js
            └── inventario.router.js
    │
    └── util/
        └── auth/
            ├── bcrypt.js
            └── jwt.js

## Desarrollo

Para desarrollar en este proyecto ejecute:

```por terminal
  npm i
  npm run dev
```

## Variables de ambiente

Para ejecutar este proyecto, necesitarás agregar las siguientes variables de entorno a tu archivo .env:

##### SERVER APP
`PORT`

##### SQL DATABASE: PSQL
`DB_USER` ,`DB_PASSWORD` ,`DB_HOST` ,`DB_PORT` ,`DB_DATABASE`

