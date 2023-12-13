const { Router } = require('express')
const MakeupController = require('../controllers/makeup')

const router = Router()

router.get('/', MakeupController.getMakeuplist)
router.get('/:id?', MakeupController.getMakeuplists)

module.exports = router
