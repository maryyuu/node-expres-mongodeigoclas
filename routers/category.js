const { Router } = require('express')
const CategoryController = require('../controllers/category')

const router = Router();

router.get('/', CategoryController.getCategory)
router.get('/:id?', CategoryController.getCategorys)
router.post('/save', CategoryController.saveCategory)
router.put('/edit/:id?', CategoryController.updateCategory)
router.delete('/delete/:id?',CategoryController.deleteCategory)

module.exports = router
