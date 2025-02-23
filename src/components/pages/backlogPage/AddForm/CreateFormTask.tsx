
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";


type FormValues = {
  titleKey: string;
  storyPoints: number;
  description: string;
  timestamp: string
}

interface AppFormProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

export const AppForm = ({ open, setOpen }: AppFormProps) => {
  const { handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      titleKey: "",
      storyPoints: 0,
      description: "",
      timestamp: new Date().toISOString(),
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Новая задача:", data);
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onClose={() => setOpen(false)} fullWidth>
      <DialogTitle sx={{display:'flex', justifyContent: 'center'}} >Create New Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="titleKey"
            control={control}
            render={({ field }) => <TextField {...field} label="Task #" fullWidth margin="dense" />}
          />
          <Controller
            name="storyPoints"
            control={control}
            render={({ field }) => <TextField {...field} label="Story Points" type="number" fullWidth margin="dense" />}
          />
          <Controller
            name="description"
            control={control}
            render={({ field }) => <TextField {...field} label="Description" fullWidth multiline rows={2} margin="dense" />}
          />
          <Controller
            name="timestamp"
            control={control}
            render={({ field }) => <TextField {...field}  type="datetime-local" fullWidth margin="dense"/>}
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)} sx={{color:'black'}}>Cancel</Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained" color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

