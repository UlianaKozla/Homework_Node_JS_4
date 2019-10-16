const router = require ('express').Router();

let { users, create_page } = require('../../controllers');
let { user_middleware } = require('../../middleware');

router.get('/all', users.find_all_users);
router.get('/', create_page.register);

router.post('/', users.create_user);
router.get('/:idUser', user_middleware.user_aviilability, users.find_by_id);
router.put('/:idUser', user_middleware.user_aviilability, users.update_user);
router.delete('/:idUser', user_middleware.user_aviilability, users.delete_user);

module.exports = router;