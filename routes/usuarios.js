const { Router } = require('express');
const { check } = require('express-validator');

const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuarios');

const { validarCampos } = require('../middlewares/validar-campos');
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router();

router.get('/', usuariosGet);

// El segundo parametro son los middlewares, si no se envia, se asume como el controlador
router.post('/', [
   check('nombre', 'El nombre es obligatorio').not().isEmpty(),
   check('password', 'El password debe de ser mas de 6 letras').isLength({ min: 6 }),
   check('correo', 'El correo no es valido').isEmail(),
   check('correo').custom( emailExiste ),
   check('rol') .custom( esRolValido ),
   validarCampos
] , usuariosPost);

router.put('/:id', [
   check('id', 'No es un ID valido').isMongoId(),
   check('id').custom( existeUsuarioPorId ),
   check('rol') .custom( esRolValido ),
   validarCampos
], usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/:id', [
   check('id', 'No es un ID valido').isMongoId(),
   check('id').custom( existeUsuarioPorId ),
   validarCampos
],usuariosDelete);




module.exports = router;