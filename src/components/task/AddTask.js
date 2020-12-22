import React from 'react'
import Button from '@material-ui/core/Button'
import NewTaskForm from './NewTaskForm'


function AddTask() {

    const [addingTaskOn, setAddingTask] = React.useState(false)
    
    const handleAddClick = () => { console.log("It's working!") 
    return <NewTaskForm/> }

    return <div>
        <h1>I need help with...</h1>
        <Button onClick={handleAddClick} variant="contained" color="primary">
            Add Task
        </Button>
    </div>
}

export default AddTask