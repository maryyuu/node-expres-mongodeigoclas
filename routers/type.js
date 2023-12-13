const { Router } = require ('express')
const TypeController = require ('../controllers/type')

const router = Router()

router.get('/', TypeController.getType)
router.get('/:id?', TypeController.getTypes)
router.post('/save', TypeController.saveType)
router.put('/edit/:id?', TypeController.updateType)
router.delete('/delete/:id?', TypeController.deleteType)

module.exports = router