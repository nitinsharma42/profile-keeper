import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

type FormFieldProps = {
    label: string;
    inputId: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
    value: string;
}

export default function FormField({label, inputId, value, onChange, onBlur} : FormFieldProps) {
  return (
    <FormControl>
      <InputLabel htmlFor={inputId}>{label}</InputLabel>
      <Input id={inputId} aria-describedby="my-helper-text" value={value} onChange={onChange} onBlur={onBlur}/>
    </FormControl>
  );
}
