import eact, { useState, useEffect } from 'react'
import Form from './form'
import Tasks from './tasks'
import './main.css'
export default function () {
    const [TaskName, setTaskName] = useState('');
    const [TaskStartDate, setTaskStartDate] = useState('');
    const [TaskEndDate, setTaskEndDate] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editable, setEditable] = useState(false);
    const [activeClass, setActiveClass] = useState(-1);
    const [editItem, setEditItem] = useState({});

    return (
        <main>
            <Form
                TaskName={TaskName}
                TaskStartDate={TaskStartDate}
                TaskEndDate={TaskEndDate}
                setTaskName={setTaskName}
                setTaskStartDate={setTaskStartDate}
                setTaskEndDate={setTaskEndDate}
                setTasks={setTasks}
                tasks={tasks}
                editable={editable}
                editItem={editItem}
                setEditable={setEditable}
            />
            <Tasks
                setTasks={setTasks}
                tasks={tasks}
                setEditable={setEditable}
                setActiveClass={setActiveClass}
                activeClass={activeClass}
                setEditItem={setEditItem}
            />
        </main>
    )
}
