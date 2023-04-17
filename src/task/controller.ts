const pool = require('../../db')
const queries = require('./queries')

const getTasks = (req, res) => {
    // console.log('getting tasks')
    // res.send("hi")
    pool.query(queries.getTasks, (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}

const getTaskById = (req, res) => {

    const id = parseInt(req.params.id);

    pool.query(queries.getTaskById, [id], (err, results) => {
        if (err) throw err;
        res.status(200).json(results.rows)
    })
}

const addTask = (req, res) => {

    const {task, day, reminder} = req.body;
    console.log("req.body", req.body)

    pool.query(queries.addTask, [task, day, reminder], (err, results) => {
        if (err) throw err;
        res.status(201).send("Task has been added successfully.! ")
    })
}

const removeTaskById = (req, res) => {

    const id = parseInt(req.params.id);


    pool.query(queries.getTaskById, [id], (err, results) => {

        const noTaskFound = !results.rows.length
        if (noTaskFound) {
            res.send("No Task found")
        }

        pool.query(queries.removeTaskById, [id], (err, results) => {

            if (err) throw err;
            res.status(200).send("Task has been removed successfully.! ")

        })
    })
}

const updateTaskById = (req, res) => {

    const id = parseInt(req.params.id);
    const {task, day, reminder} = req.body;
    
    pool.query(queries.getTaskById, [id], (err, results) => {
        const noTaskFound = !results.rows.length
        if (noTaskFound) {
            res.send("No Task found")
        }

        pool.query(queries.updateTaskById, [task, day, reminder, id], (err, results) => {
            if (err) throw err;
            res.status(200).send("Task has been updated successfully.! ")
        })
    })
}

export {
    getTasks,
    getTaskById,
    addTask,
    removeTaskById,
    updateTaskById,
}