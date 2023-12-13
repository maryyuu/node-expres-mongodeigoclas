const { Router } = require('express')
const CategoryController = require('../controllers/category')

const router = Router();

router.get('/', CategoryController.getCategory)

module.exports = router
