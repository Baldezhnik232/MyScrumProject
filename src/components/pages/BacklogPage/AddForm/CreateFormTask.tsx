
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import {format, parse} from "date-fns"
import {Backlog} from "../../../../api/types/interfaceApi.tsx"
import { useTranslation } from "react-i18next";

type FormValues = {
  title: string;
  storyPoints: number;
  description: string;
  timestamp: string
}

interface AppFormProps {
  open: boolean;
  addTask: (value: Backlog)=> void
  setOpen: (value: boolean) => void;
}

export const AppForm = ({ open, setOpen, addTask }: AppFormProps) => {
  const {t} = useTranslation();
  const { handleSubmit, control, reset, formState:{errors} } = useForm<FormValues>({
    defaultValues: {
      title: "",
      storyPoints: 0,
      description: "",
      timestamp: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    },
  });
  const onSubmit = (data: FormValues): void => {
    const newDate = {
      ...data,
      timestamp: format(parse(data.timestamp, "yyyy-MM-dd'T'HH:mm", new Date()), "yyyy-MM-dd'T'HH:mm" )
    }
    const newTask: Backlog = {id: Date.now(), ...newDate }
    addTask(newTask)
    setOpen(false);
    reset();
  };

  return (
    <Dialog disableScrollLock open={open} onClose={(): void => setOpen(false)} fullWidth>
      <DialogTitle sx={{display:'flex', justifyContent: 'center'}} >Create New Task</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            rules={{
              required: t("formTaskRequired.required"),
              minLength: {value:3, message:t("formTaskRequired.message") }
            }}
            render={({ field }) => <TextField {...field} label="Task #" fullWidth margin="dense" error={!!errors.title} helperText={errors.title?.message} />}
          />
          <Controller
            name="storyPoints"
            control={control}
            rules={{
              required: t("formStorPointRequired.required"),
              min:{value: 1, message: t('formStorPointRequired.message')}
            }}
            render={({ field }) => <TextField {...field} label="Story Points" type="number" fullWidth margin="dense" error={!!errors.storyPoints} helperText={errors.storyPoints?.message} />}
          />
          <Controller
            name="description"
            control={control}
            rules={{
              required: t("formDescription.required"),
              minLength: {value:3, message: t("formDescription.message") }
            }}
            render={({ field }) => <TextField {...field} label="Description" fullWidth multiline rows={2} margin="dense" error={!!errors.description} helperText={errors.description?.message} />}
          />
          <Controller
            name="timestamp"
            control={control}
            rules={{
              required: t("formDate.required"),
            }}
            render={({ field }) => <TextField {...field}  type="datetime-local"  fullWidth margin="dense" error={!!errors.timestamp} helperText={errors.timestamp?.message} />}
          />
        </form>
      </DialogContent>

      <DialogActions>
        <Button onClick={() => setOpen(false)} sx={{color:'black'}}>Cancel</Button>
        <Button type="submit" onClick={handleSubmit(onSubmit)} variant="contained" color="primary" >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

