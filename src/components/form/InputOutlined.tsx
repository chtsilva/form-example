import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import { FieldValues, UseFormRegister } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1.5),
      width: '45ch',
    },
  },
}));

interface InputOutlinedProps {
  label: string
  value?: string
  onChange?: (target: any) => void
  register: UseFormRegister<FieldValues>
  required?: boolean
  [key: string]: any
}

export default function InputOutlined({ label, value, register, required = false, ...rest }: InputOutlinedProps) {
  const classes = useStyles();
  return (
    <>
      <TextField
        className={classes.root}
        id={label}
        label={label}
        value={value}
        variant="outlined"
        {...register(label.toLowerCase(), {required})}
        {...rest} />
    </>
  )
}