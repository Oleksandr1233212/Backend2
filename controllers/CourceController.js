const Course = require('../modeles/CourceModele');

// const getTasks = async (req, res) => {
//     try {
//         const tasks = await Task.find({});
//         res.json(tasks);
//     } catch (error) {
//         res.status(500).send("Error retrieving data from the database.");
//     }
// };

// const getTaskById = async (req, res) => {
//     try {
//         const task = await Task.findById(req.params.id);
//         if (task) {
//             res.json(task);
//         } else {
//             res.status(404).send("Task not found.");
//         }
//     } catch (error) {
//         res.status(500).send("Error retrieving data from the database.");
//     }
// };

// const addTask = async (req, res) => {
//     try {
//         const task = new Task({
//             name: req.body.name,
//             author: req.body.author,
//             data: req.body.createdAt,
//             category: req.body.category,
//             edited: req.body.edited,
//             completed: req.body.completed,
//             timecomplited: req.body.timeComplited
//         });
//         await task.save();
//         res.json("Added Done");
//     } catch (error) {
//         res.status(500).send("Error adding task.");
//     }
// };

// const deleteTask = async (req, res) => {
//     try {
//         await Task.findByIdAndDelete(req.query.id);
//         res.json("Delete Done!");
//     } catch (error) {
//         res.status(500).send("Error deleting task.");
//     }
// };

// const updateTask = async (req, res) => {
//     try {
//         const updateFields = {
//             name: req.body.name,
//             author: req.body.author,
//             category: req.body.category,
//             edited: req.body.edited,
//             completed: req.body.completed,
//             timecomplited: req.body.timeComplited
//         };
//         const task = await Task.findByIdAndUpdate(req.query.id, updateFields, { new: true });
//         res.json("Update Done!");
//     } catch (error) {
//         res.status(500).send("Error updating task.");
//     }
// };

module.exports =  Course ;