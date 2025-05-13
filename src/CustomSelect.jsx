import React from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@mui/material";

const CustomSelect = ({ name, label, control, options }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <FormControl fullWidth margin="normal" error={!!error}>
        <InputLabel>{label}</InputLabel>
        <Select {...field} label={label}>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    )}
  />
);

export default CustomSelect;
