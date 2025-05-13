import React from "react";
import { useForm } from "react-hook-form";
import { Box, Button, Typography } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomTextField from "./CustomTextField";
import CustomSelect from "./CustomSelect";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  country: yup.string().required("Country is required")
});

const countryOptions = [
  { value: "in", label: "India" },
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" }
];

export default function App() {
  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ maxWidth: 400, mx: "auto", mt: 5 }}>
      <Typography variant="h5" gutterBottom>
        Custom Form Components
      </Typography>

      <CustomTextField name="name" label="Name" control={control} />
      <CustomTextField name="email" label="Email" control={control} />
      <CustomSelect name="country" label="Country" control={control} options={countryOptions} />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }} disabled={!isValid}>
        Submit
      </Button>
    </Box>
  );
}
