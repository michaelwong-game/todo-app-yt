const ToDoModel = require("../models/ToDoModel");

const getToDo = async (req, res) => {
    const toDo = await ToDoModel.find();
    res.send(toDo);
};

const saveToDo = async (req, res) => {
    const { text } = req.body;
    console.log("post text", text);

    ToDoModel.create({ text }).then((data) => {
        console.log("Added successfully");
        console.log(data);
        res.send(data);
    });
};

const updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    ToDoModel.findByIdAndUpdate(_id, { text })
        .then(() => {
            res.send("Updated successfully...");
        })
        .catch((err) => {
            console.log("Updated failed: ", err);
        });
};

const deleteToDo = async (req, res) => {
    const { _id } = req.body;
    console.log("_id: ", _id);
    ToDoModel.findByIdAndDelete(_id)
        .then(() => {
            res.send("Deleted successfully...");
        })
        .catch((err) => {
            console.log("Updated failed: ", err);
        });
};

module.exports = { getToDo, saveToDo, updateToDo, deleteToDo };
