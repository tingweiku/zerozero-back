import express from 'express'
import auth from '../middleware/auth.js'
import {
  newFurnitures,
  getFurnitures,
  getallFurnitures,
  editFurniture,
  getallDone
} from '../controllers/furnitures.js'

const router = express.Router()

router.post('/', newFurnitures)
router.get('/', auth, getFurnitures)
router.get('/all', auth, getallFurnitures)
router.get('/alldone', auth, getallDone)
router.patch('/:id', auth, editFurniture)

export default router
