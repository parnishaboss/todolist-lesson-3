import React, {useState, ChangeEvent, KeyboardEvent} from 'react';
import {FilterFaluesType} from './App';

export type tasksType = {
    id: string
    title: string
    isDone: boolean
}
type propsType = {
    title: string
    tasks: Array<tasksType>
    removeTask: (id: string) => void
    changeFilter: (value: FilterFaluesType) => void
    addTask: (title: string) => void
}
export const Todolist = (props: propsType) => {
    const [newTaskTitle, setNewTaskTitle] = useState('')
    let addTaskHandler = () => {
        props.addTask(newTaskTitle);
        setNewTaskTitle('')
    }
    let onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler()
        }
    }
    let onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    let onAllClickHandler = () => {
        props.changeFilter('all')
    }
    let onActiveClickHandler = () => {
        props.changeFilter('active')
    }
    let onCompletedClickHandler = () => {
        props.changeFilter('completed')
    }
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTaskTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={addTaskHandler}>add +</button>
            </div>
            <ul>
                {props.tasks.map((t) => {
                    const onRemoveHandler = () => {
                        props.removeTask(t.id)
                    }
                    return (<li key={t.id}><input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onRemoveHandler}>X
                        </button>
                    </li>)
                })}
            </ul>
            <div>
                <button onClick={onAllClickHandler}>all</button>
                <button onClick={onActiveClickHandler}>active</button>
                <button onClick={onCompletedClickHandler}>completed</button>
            </div>
        </div>
    )
}