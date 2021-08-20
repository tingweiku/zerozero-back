import express from 'express'
import auth from '../middleware/auth.js'
import {
  newLocations,
  getLocations,
  editLocation,
  dellocation
} from '../controllers/locations.js'

const router = express.Router()

router.post('/', auth, newLocations)
router.get('/', getLocations)
router.patch('/:id', auth, editLocation)
router.delete('/:id', auth, dellocation)

export default router
