import express from 'express'
import { createUser, loginUser } from '../controllers/user.controller.js'

const router = express.Router()

router.get("/", createUser)
router.post("/", loginUser)

export default router