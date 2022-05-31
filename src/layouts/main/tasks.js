import React, { useState } from 'react'
import './main.css'
import EditIcon from '@material-ui/icons/Edit';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
export default function (props) {
    var [classActive, setClassActive] = useState(false)
    var [divlength, setDivlength] = useState(props.tasks.length)
    function deletTask(task, index) {
        setClassActive(!classActive);
        props.tasks[index].addClassActive = true;
        setTimeout(() => { props.setTasks(props.tasks.filter(item => item.taskId !== task.taskId)) }, 500)
    }

    const getEditTaskIformation = (task) => { props.setEditable(true); props.setEditItem(task); }




    return (
        <div className='tasks'>
            <div className='task'>
                <span className='task__id'>Task id</span>
                <span className='task__name'>Task name</span>
                <span className='task__date' id='start'>Task start date</span>
                <span className='task__date' id='end'>Task end date</span>
                <span className='actions'>
                    Actions
                </span>
            </div>
            {
               
               props.tasks.length > 0 ?
            props.tasks.map(function (item, index) {
                return <div className={item.addClassActive ? 'task active' : 'task'} id={index} key={index}>
                <span className='task__id'>{item.taskId}</span>
                <span className='task__name'>{item.taskName}</span>
                <span className='task__date' id='start'>{item.TaskStartDate}</span>
                <span className='task__date' id='end'>{item.EndDate}</span>
                <span className='actions'>
                    <samp data-samo={index} onClick={(e) => { getEditTaskIformation(item) }} id='edit'> <EditIcon /></samp>
                    <samp data-samp={index} onClick={(e) => { deletTask(item, e.currentTarget.getAttribute('data-samp')); }} id={'delete'}> <DeleteSweepIcon /></samp>
                </span>
            </div>
            })
            :
            <div className='task no__task'>Add some tasks</div>            
            }
        </div>
    )
}

