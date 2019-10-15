const router = require ('express').Router();

let { flats, create_page } = require('../../controllers');
let { flat_middleware } = require('../../middleware');

router.post('/',  flats.create_flat);
router.get('/', create_page.flats);

router.get('/all', flats.find_all_flats);
router.get('/:idFlat', flat_middleware.flat_aviilability, flats.find_flat_by_id);
router.put('/:idFlat', flat_middleware.flat_aviilability, flats.update_flat);
router.delete('/:idFlat', flat_middleware.flat_aviilability, flats.delete_flat);

module.exports = router;


