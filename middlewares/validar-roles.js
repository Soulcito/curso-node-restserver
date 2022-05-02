
const { request, response } = require('express');

const esAdminRole = (req = request, res = response, next) => {

   // La funcion validarJWT ya estable el usuario en la request, por lo tanto,
   // esta funcion debe ejecutarse despues

   if( !req.usuario ) {
     return res.status(500).json({
       msg: 'Se quiere verificar el role sin validar el token primero'
     });
   }

   const { role, nombre } = req.usuario;

   if( rol !== 'ADMIN_ROLE' ) {
     return res.status(401).json({
       msg: `${ nombre } no es administrador` 
     });
   }

   next();
}

const tieneRole = (...roles) => {
  
  return (req = request, res = response, next) => {
    
    if( !req.usuario ) {
      return res.status(500).json({
        msg: 'Se quiere verificar el role sin validar el token primero'
      });
    }
    
    if ( !roles.includes(req.usuario.rol) ) {
       return res.status(401).json({
         msg: `El servicio requiere uno de estos roles ${ roles }`
       })
    }

    next();
  }
}

module.exports = {
  esAdminRole,
  tieneRole
}