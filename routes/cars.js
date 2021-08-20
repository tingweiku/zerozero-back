import express from 'express'
import auth from '../middleware/auth.js'
import {
  newCar,
  getCars,
  getallCar,
  getallDone,
  editCar
} from '../controllers/cars.js'

const router = express.Router()

router.post('/', newCar)
router.get('/', auth, getCars)
router.get('/all', auth, getallCar)
router.get('/alldone', auth, getallDone)
router.patch('/:id', auth, editCar)

export default router
