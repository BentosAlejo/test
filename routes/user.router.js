 import { Router } from "express";


const router = Router()
const users = []


router.get('/', (req, res) =>{
    console.log(req.data1)
    res.json({users})
})

router.post('/', (req, res) => {
    const {user} = req.body
    users.push(user)

    res.send({status: 'success'})
})


export default router