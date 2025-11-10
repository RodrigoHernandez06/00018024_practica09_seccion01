import { Router } from 'express'
import { displayHome } from '../controllers/displayHome.js'
import { deleteUser } from '../controllers/deleteUser.js'
import { getUsers } from '../controllers/getUsers.js'
import { getUserById } from '../controllers/getUsers.js'
import { createUser } from '../controllers/createUser.js'
import { updateUser } from '../controllers/updateUser.js'

import verifyToken from '../utils/middleware/verifyToken.js'

const router = Router()

router.get('/', displayHome)
router.get('/users', verifyToken, getUsers)
router.get('/users/:id', verifyToken, getUserById)
router.post('/users', verifyToken, createUser)
router.put('/users/:id', verifyToken, updateUser)
router.delete('/users/:id', verifyToken, deleteUser)

export default router
