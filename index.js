import express from "express";
import cors from 'cors'

//import blogRoutes from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
//app.use('/usuarios',blogRoustes)


app.get('/',(req,res)=>{
    res.send('hola mundo')
})

app.listen(8000, ()=> {
    console.log('servidor Corriente en http://localhost:8000/')
})