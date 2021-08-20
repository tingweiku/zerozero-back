import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  getuserinfo,
  login,
  getUsers,
  logout,
  editUser,
  editPoints,
  extend
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.get('/', auth, getuserinfo)
router.post('/login', login)
router.get('/all', auth, getUsers)
router.delete('/logout', auth, logout)
router.patch('/exchange/:id', auth, editPoints)
router.patch('/:id', auth, editUser)
router.post('/extend', auth, extend)

export default router
