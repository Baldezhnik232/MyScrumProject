import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";

import { useForm, Controller } from "react-hook-form";
import {useParams} from 'react-router-dom';
import {format, parse} from "date-fns"
import {Sprint} from "../../../../api/types/interfaceApi.tsx";


type FormSprintsValues = {
    title: string,
    description: string,
    timestamp: string,
}

interface AppFormPropsSprints{
    open: boolean,
    addSprints: (value: Sprint) => void
    setOpen: (value: boolean) => void,
}

export const AppFormSprints = ( {open, setOpen, addSprints}:AppFormPropsSprints ) => {

    const { id } = useParams<{ id: string }>();


    const { handleSubmit, control, reset, formState:{errors} } = useForm<FormSprintsValues>({
        defaultValues: {
            title: "",
            description: "",
            timestamp: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
        },
    });
    const onSubmit = (data: FormSprintsValues) => {
        const newData = {
            ...data,
            timestamp: format(parse(data.timestamp, "yyyy-MM-dd'T'HH:mm", new Date()), "yyyy-MM-dd'T'HH:mm" )
        }
        const newSprints ={
            projectId: parseInt(id),
            ...newData}
        addSprints(newSprints);
        setOpen(false);
        reset()
    }

    return (
        <Dialog disableScrollLock  open={open} onClose={(): void => setOpen(false)} fullWidth>
            <DialogTitle sx={{display: 'flex', justifyContent: 'center'}}>Create New Sprint</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='title'
                        control={control}
                        rules={{
                            required: 'Спринт',
                            minLength: {value: 3, message: 'лыл'}
                        }}
                            render={({field}) => <TextField{...field} label= 'Sprint' fullWidth margin="dense" error={!!errors.title} helperText={errors.title?.message} /> }
                    />
                    <Controller
                        name= 'description'
                        control={control}
                        rules={{
                            required: 'Описание ',
                            minLength: {value:3, message: 'wewe'}
                        }}
                        render={({field}) => <TextField {...field} label = 'Disc' fullWidth multiline rows={2} margin="dense" error={!!errors.description} helperText={errors.description?.message} />}
                        />
                    <Controller
                        name="timestamp"
                        control={control}
                        rules={{
                            required: 'ssdsd',
                        }}
                        render={({ field }) => <TextField {...field}  type="datetime-local"  fullWidth margin="dense" error={!!errors.timestamp} helperText={errors.timestamp?.message} />}
                    />
                </form>
            </DialogContent>

            <DialogActions>
                <Button onClick={() => setOpen(false)} sx={{color:'black'}}>Cancel</Button>
                <Button type= 'submit' onClick={handleSubmit(onSubmit)} variant="contained" color='primary'>Create</Button>
            </DialogActions>

        </Dialog>
    )
}
