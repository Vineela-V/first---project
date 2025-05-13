import React from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().positive("Age must be positive").required("Age is required")
});

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange" 
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: 400, mx: "auto", mt: 5 }}
    >
      <Typography variant="h5" gutterBottom>
        Real-Time Form
      </Typography>

      <TextField
        label="Name"
        fullWidth
        margin="normal"
        {...register("name")}
        error={!!errors.name}
        helperText={errors.name?.message}
      />

      <TextField
        label="Email"
        fullWidth
        margin="normal"
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <TextField
        label="Age"
        type="number"
        fullWidth
        margin="normal"
        {...register("age")}
        error={!!errors.age}
        helperText={errors.age?.message}
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
        disabled={!isValid}
      >
        Submit
      </Button>
    </Box>
  );
}
