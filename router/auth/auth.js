const router = require ('express').Router();

let { users, create_page } = require('../../controllers');
let { user_middleware } = require('../../middleware');

router.get('/auth', create_page.auth);
router.post('/auth', user_middleware.user_aviilability, users.auth);

module.exports = router;