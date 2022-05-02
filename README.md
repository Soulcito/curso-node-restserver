# WebServer + RestServer

Recordar ejecutar `npm install` para reconstruir los
modulos de Node.

##

Se requiere:

- crear base de datos en mongo DB
- crear parametro MONGODB_CNN en un archivo setting.js y exportarlo, guardaria el string de conexion a MONGO DB
- crear parametro SECRETORPRIVATEKEY, que contiene la frase secreta para el JWT

la conexion deberia ser algo como esto:

```javascript
MONGODB_CNN =
  'mongodb+srv://<user>:<pass>@miclustercafe.pmpiy.mongodb.net/cafeDB';
```
