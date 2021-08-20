import express from 'express'
import auth from '../middleware/auth.js'
import {
  checkout,
  getOrders,
  getallOrders
} from '../controllers/orders.js'

const router = express.Router()

router.post('/', auth, checkout)
router.get('/', auth, getOrders)
router.get('/all', auth, getallOrders)

export default router
