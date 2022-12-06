import axios from "axios";

const baseurl = "http://localhost:3000";

const getAllToDo = (setToDo) => {
    axios.get(baseurl).then(({ data }) => {
        console.log("data ---> ", data);
        setToDo(data);
    });
};

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseurl}/save`, { text })
        .then((data) => {
            setText("");
            getAllToDo(setToDo);
        })
        .catch((err) => {
            console.log(err);
        });
};

const updateToDo = (toDoId, text, setToDo, setText, setUpdating) => {
    axios
        .post(`${baseurl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("");
            setUpdating(false);
            getAllToDo(setToDo);
        })
        .catch((err) => {
            console.log(err);
        });
};

const deleteToDo = (toDoId, setToDo) => {
    axios
        .post(`${baseurl}/delete`, { _id: toDoId })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo);
        })
        .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
