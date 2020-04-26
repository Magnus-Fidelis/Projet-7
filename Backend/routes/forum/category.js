const express = require('express');
const router = express.Router();

const categoriesCtrl = require('../../controllers/forum/categories');

router.get('/', categoriesCtrl.getCategory);
router.post('/', categoriesCtrl.createCategory);
module.exports = router;
