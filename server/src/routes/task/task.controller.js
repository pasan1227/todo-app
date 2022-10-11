const Task = require('../../models/Task')

const getAllTasks = async (req, res) => {
    const Tasks = await Task.find({})
    res.status(200).json(Tasks)
}

const createTask = async (req, res) => {
  
    const task = await Task.create(req.body)
    try {
        await task.save()
        res.status(201).json(task)
    } catch (err) {
        console.log(err);
    }
}

const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndRemove(req.params.id)
        res.status(200).json('Task deleted')
    } catch (err) {
        console.log(err);
    }
};

const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedTask)
}


module.exports = {
    getAllTasks, createTask, deleteTask, updateTask
}