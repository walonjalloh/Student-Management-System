import express from 'express'
import { config } from 'dotenv'
import fs from 'fs'

const home = fs.readFileSync('./templates/hello.html', 'utf-8')

config()

const app = express()

app.use(express.static('templates'))

//home route
app.get('/', (req,res) => {
    res.send(home)
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on Port http://localhost:${process.env.PORT}`)
})
