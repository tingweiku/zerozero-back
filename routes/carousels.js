import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'
import {
  newCarousel,
  getCarousel,
  getAllCarousel,
  delCarousel,
  editCarousel
} from '../controllers/carousels.js'

const router = express.Router()

router.post('/', auth, upload, newCarousel)
router.get('/', getCarousel)
router.get('/all', auth, getAllCarousel)
router.delete('/:id', auth, delCarousel)
router.patch('/:id', auth, editCarousel)

export default router
