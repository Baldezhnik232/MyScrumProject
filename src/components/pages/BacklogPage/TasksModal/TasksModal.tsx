

import { Modal, Box, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { TaskStatus} from "../../../../api/types/interfaceApi.tsx";
import  {useDispatch} from 'react-redux';
import {addTask} from '../../../../store/tasksSlice.tsx'
import {removeBacklogTasks} from '../../../../store/backlogSlice.tsx'
 


interface TaskModalProps {
    open : boolean;
    onClose: () => void;
    tasksID: number,
    onSave: ( 
        id: number,  
        status: TaskStatus, 
        sprintId: number,  
        title: string, 
        storyPoints: number,
        description: string,
        timestamp: string,
        isLegacy: boolean,
        image?:File) => void
}

export const TaskModal: React.FC<TaskModalProps> = ({open, onClose, tasksID, onSave }) => {
    const dispatch = useDispatch();
    const [status, setStatus]= useState<TaskStatus>('📝 To Do');
    const [sprintId, setSprintId] = useState<number>(1);
   
   
    const handleSave =()=> {
        const newTask = {
            id: tasksID,
            title: `Tasks ${tasksID}`,
            status,
            sprintId,
        }
        dispatch(removeBacklogTasks(tasksID))
        dispatch(addTask(newTask))
        onClose();

    }
    console.log(TaskModal, 'sddsds');


    return (
        <Modal open={open} onClose={onClose} >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography variant="h6" gutterBottom>
                    Move Task to Sprint
                </Typography>
                <FormControl fullWidth sx={{mt:2}}>

                    <Select value={sprintId} onChange={(e) => setSprintId(Number(e.target.value))}>
                    {[...Array(9)].map((_, i) => (
                            <MenuItem key={i + 1} value={i + 1}>Sprint {i + 1}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <Select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                        <MenuItem value="📝 To Do">To Do</MenuItem>
                        <MenuItem value="🚀 Doing">Doing</MenuItem>
                        <MenuItem value="🚀 Done">Done</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button onClick={() => onClose()} sx={{ mr: 2 }}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleSave}>
                        Save
                    </Button>
                </Box>
            </Box>
        </Modal>
    )
}

