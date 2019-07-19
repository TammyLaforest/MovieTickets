import express, { Router } from 'express'

import { index } from './controllers/movies'

const router = Router()

router.route('/movies.json').get(index)

export default router