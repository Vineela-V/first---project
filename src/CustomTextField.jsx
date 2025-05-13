import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

const CustomTextField = ({ name, label, control, type = "text" }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        label={label}
        type={type}
        fullWidth
        margin="normal"
        error={!!error}
        helperText={error ? error.message : ""}
      />
    )}
  />
);

export default CustomTextField;
