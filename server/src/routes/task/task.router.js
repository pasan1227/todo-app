const express = require('express')
const { getAllTasks, createTask, deleteTask, updateTask } = require('./task.controller')
const taskRouter = express.Router()

taskRouter.get('/', getAllTasks)
taskRouter.post('/', createTask)
taskRouter.delete('/:id', deleteTask)
taskRouter.put('/:id', updateTask)

module.exports = { taskRouter }