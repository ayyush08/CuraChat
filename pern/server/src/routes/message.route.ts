import { Router } from "express";

const router = Router()

router.get('/conversation', (req, res) => {
    res.send('Hello conversation')
})






export default router