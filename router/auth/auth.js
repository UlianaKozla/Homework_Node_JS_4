const router = require ('express').Router();

let { auth, create_page } = require('../../controllers');
let { user_middleware, auth_middleware } = require('../../middleware');

router.get('/auth', create_page.auth);
router.post('/auth', auth_middleware.dataValidity, auth.auth);

module.exports = router;