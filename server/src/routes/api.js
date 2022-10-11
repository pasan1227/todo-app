const express = require('express');
const {taskRouter} = require('./task/task.router')

const api = express.Router()

api.use('/', taskRouter)

module.exports = api
