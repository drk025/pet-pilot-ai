import express from 'express'
import { healthCare } from '../controllers/healthCare.controller.js'

const router = express.Router()

router.post("/query", healthCare)
export default router