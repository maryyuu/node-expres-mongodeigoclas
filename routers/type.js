const { Router } = require ('express')
const TypeController = require ('../controllers/type')

const router = Router()

router.get('/', TypeController.getType)
router.get('/:id?', TypeController.getTypes)

module.exports = router