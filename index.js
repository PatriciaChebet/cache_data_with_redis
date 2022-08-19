const express = require('express')
const redis = require('redis')
const envVariables = require('./common/config/env.config')

const redisUrl = envVariables.redis_url
const redisClient = redis.createClient(redisUrl)

const app = express()
app.use(express.json())

app.listen(8080, () => {
    console.log("App running on port 8080")
})