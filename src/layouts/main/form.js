import React, { useState, useRef } from 'react'
import './main.css';
export default function (props) {
    var [tasksNumber, settasksNumber] = useState(0);
    var nameInputElement = useRef();
    var startDateInputElement = useRef();
    var endDateInputElement = useRef();

    const setTask = () => {
        props.tasks.filter(function (index) {
            if (index.taskId == tasksNumber) settasksNumber(++tasksNumber);
        })
        settasksNumber(props.tasks.length);
        if (props.TaskName.length > 0 && props.TaskStartDate.length > 0 && props.TaskEndDate.length > 0) {
            props.tasks.push({
                taskId: tasksNumber++,
                taskName: props.TaskName,
                TaskStartDate: props.TaskStartDate,
                EndDate: props.TaskEndDate,
                addClassActive: false
            });
            props.setTasks([...props.tasks]);
        } else {
            alert('Enter The three inputs')
        }
        console.log('again')
    };

    const addTask = e => {
        e.preventDefault()
        setTask();
    };

    const editTask = e => {
        e.preventDefault();
        var id = props.editItem.taskId;
        if (props.editable) {
            const newTask = {
                taskId: id,
                taskName: nameInputElement.current.value,
                TaskStartDate: startDateInputElement.current.value,
                EndDate: endDateInputElement.current.value,
                addClassActive: false
            }
            props.setTasks(props.tasks.map(item => {
                console.log(item.taskId !== id)
                return item.taskId !== id ? item : newTask;
            }))
            props.setEditable(false); 
            console.log(nameInputElement.current.value)
        }
    }

    return (
        <>
        <h2 className='form__title'>{props.editable ? 'Edit todo' : 'Add todo'}</h2>
        <form className={props.editable ? 'edit' : ''}>
            <input ref={nameInputElement} onChange={(e) => { if (!props.editable) { props.setTaskName(e.target.value) } }} placeholder={'taskName'} />
            <label htmlFor={'date__start'}>Task start date</label>
            <input ref={startDateInputElement} onChange={(e) => { if (!props.editable) { props.setTaskStartDate(e.target.value) } }} type={'date'} id="date__start" />
            <label htmlFor={'date__end'}>Task end date</label>
            <input ref={endDateInputElement} onChange={(e) => { if (!props.editable) { props.setTaskEndDate(e.target.value) } }} type={'date'} id="date__end" />
            <button type="submit" onClick={props.editable ? (e) => editTask(e) : (e) => addTask(e)}>{props.editable ? 'Edit todo' : 'Add todo'}</button>
        </form>
        </>
    )
}

