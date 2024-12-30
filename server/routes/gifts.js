import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'

//Converts the import.meta.url property to a file path and 
//store the result in a variable called __filename
const __filename = fileURLToPath(import.meta.url)
//contain the directory name of the current module file
const __dirname = path.dirname(__filename)

//Express Router
const router = express.Router()

//GET route at the / endpoint that responds with status 200 and sends a JSON of the giftData
router.get('/',(req, res) => {
    res.status(200).json(giftData)
})

//GET route at the /:giftId endpoint that responds with status 200 and sends the gift.html file
router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../../client/public/gift.html'))   
}) 

export default router
