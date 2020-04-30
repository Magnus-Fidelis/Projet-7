const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const auth_admin = require('../../middleware/auth_admin')

const categoriesCtrl = require('../../controllers/forum/categories');

router.get('/', categoriesCtrl.getCategory);
router.post('/', auth_admin, categoriesCtrl.createCategory);

router.get('/:id', auth, categoriesCtrl.getCategoryById);
router.put('/:id', auth_admin, categoriesCtrl.updateCategory);

router.delete('/:id', auth_admin, categoriesCtrl.deleteCategory);
module.exports = router;
