import express from "express";
import userRouter from "./routes/user.router.js"
import petsRouter from "./routes/pet.router.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true})) // le funcino a un compa, no se que hace
app.use('static', express.static('public'))

app.use(function(req, res, next) {
    console.log('Time: ', new Date().toLocaleTimeString())
    next()
})
function midil ( req, res, next){
    req.data1 = 'some data'
}
function midil2 ( req, res, next){
    req.data1 = 'some data2 '
}

app.use('/api/users', midil, midil2,  userRouter)
app.use('/api/pets', petsRouter)


app.listen(8080)