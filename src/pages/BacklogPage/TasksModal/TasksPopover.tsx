

import {  Box, Typography, Button, MenuItem, Select, FormControl } from '@mui/material';
import React, { useState } from 'react';
import { TaskStatus} from "../../../api/types/interfaceApi.ts";
import Popover from '@mui/material/Popover';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';




interface TaskPopoverProps {
    anchorEl: HTMLElement | null,
    onClose: () => void;
    tasksID: number,
    onSave: ( tasksID: number, status: TaskStatus, sprintId: number) => void
}

export const TaskPopover: React.FC<TaskPopoverProps> = ({anchorEl, onClose, tasksID, onSave }) => {
    const {id} = useParams<{id:string}>();

    const open = Boolean(anchorEl);

    const [status, setStatus]= useState<TaskStatus>('todo');


    const projectId = Number(id);

    const getAvailableSprints = (projectId: number) => 
    Array.from({ length: 3 }, (_, i) => i + 1 + (projectId - 1) * 3);

    const availableSprints = getAvailableSprints(projectId)

    const [sprintId, setSprintId] = useState<number>(availableSprints[0]);

    const {t} = useTranslation();
   
    const handleSave =()=> {
        onSave( tasksID,  status, sprintId );
        onClose();

    }
    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'right',
            }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
         >
            <Box sx={{
                p: 2, minWidth: 300
            }}>
                <Typography variant="h6" gutterBottom>
                    {t("moveSpint")}
                </Typography>
                <FormControl fullWidth sx={{mt:2}}> 
                    <Select value={sprintId} onChange={(e) => setSprintId(Number(e.target.value))}>
                    {availableSprints.map((id) => (
                            <MenuItem key={id} value={id}>
                                {t('sprint')} {id}
                            </MenuItem>
                        ))}
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
                        {t('cancel')}
                    </Button>
                    <Button variant="contained" onClick={handleSave}>
                        {t('create')}
                    </Button>
                </Box>
            </Box>
        </Popover>
    )
}

