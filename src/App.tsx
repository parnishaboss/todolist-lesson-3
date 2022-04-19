import React, {useState} from 'react';
import './App.css';
import {tasksType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterFaluesType = "all" | "active" | "completed"

const App = () => {
    let [tasks, setTasks] =useState<Array<tasksType>>([
        {id: v1(), title: "CSS", isDone:true},
        {id: v1(), title: "JS", isDone:true},
        {id: v1(), title: "React", isDone:false},
        {id: v1(), title: "Redux", isDone:false}
    ])
    let [filter, setFilter] = useState<FilterFaluesType>("all")
    let removeTask = (id:string) => {
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks)
    }
    let addTask = (title:string) => {
        let newTask = {id: v1(),
            title: title,
            isDone:false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }
    let changeFilter = (value:FilterFaluesType) => {
        setFilter(value)
    }
    let tasksForTodolist = tasks;
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn?"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
