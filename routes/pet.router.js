 import { Router } from "express";


const router = Router()
const pets = []


router.get('/', (req, res) =>{
    console.log(req.data1)
    res.json({pets})
})

router.post('/', (req, res) => {
    const pet = req.body
    pets.push(pet)

    res.send({status: 'success'})
})


export default router
