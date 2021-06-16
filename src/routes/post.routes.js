const { Router } = require('express');

const postController = require('../controllers/post.controller');

const router = Router();

router.get('/', postController.getAll);
router.get('/:id', postController.getOne);
router.post('/', postController.addOne);
router.patch('/:id', postController.updateOne);
router.delete('/:id', postController.deleteOne);

module.exports = router;
