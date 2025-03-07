

import { Modal, Box, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { TaskStatus} from "../../../../api/types/interfaceApi.tsx";



interface TaskModalProps {
    open : boolean;
    onClose: () => void;
    onSave: (status: TaskStatus, sprintId: number) => void
}

export const TaskModal: React.FC<TaskModalProps> = ({open, onClose, onSave}) => {
    const [sprintId, setSprintId] = useState<number>(1);
    const [status, setStatus]= useState<TaskStatus>('todo');


    const handleSave =()=> {
        onSave( status, sprintId );
        onClose();

    }

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
                        <MenuItem value={1}>Sprint 1</MenuItem>
                        <MenuItem value={2}>Sprint 2</MenuItem>
                        <MenuItem value={3}>Sprint 3</MenuItem>
                        <MenuItem value={4}>Sprint 4</MenuItem>
                        <MenuItem value={5}>Sprint 5</MenuItem>
                        <MenuItem value={6}>Sprint 6</MenuItem>
                        <MenuItem value={7}>Sprint 7</MenuItem>
                        <MenuItem value={8}>Sprint 8</MenuItem>
                        <MenuItem value={9}>Sprint 9</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mt: 2 }}>
                    <Select value={status} onChange={(e) => setStatus(e.target.value as TaskStatus)}>
                        <MenuItem value="todo">To Do</MenuItem>
                        <MenuItem value="doing">Doing</MenuItem>
                        <MenuItem value="done">Done</MenuItem>
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

