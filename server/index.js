require('dotenv').config()
const express = require('express')
const router = require('./routes')
const sequelize = require('./db')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`)
        })
    } catch {
        console.error('Unable to connect to the database:', error);
    }
}

start()