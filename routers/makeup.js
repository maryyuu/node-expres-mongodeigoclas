const { Router } = require('express')
const MakeupController = require('../controllers/makeup')

const router = Router()

router.get('/', MakeupController.getMakeuplist)
router.get('/:id?', MakeupController.getMakeuplists)
router.post('/save', MakeupController.saveMakeuplist)
router.put('/edit/:id?', MakeupController.updateMakeup)
router.delete('/delete/:id?', MakeupController.deleteMakeup)

module.exports = router
