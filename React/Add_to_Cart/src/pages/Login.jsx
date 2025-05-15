import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig.js";
import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router";
import { useDispatch } from "react-redux";

import { setUser } from "../redux/user/userSlice.js";

export default function Login() {
  const schema = yup
    .object({
      email: yup
        .string()
        .required()
        .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email is invaild"),
      password: yup
        .string()
        .required()
        .min(6, "Password should be atleast 6 characters"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    let { email, password } = data;
    // to get logged in
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User login succes !");
    } catch (error) {
      console.log("Error message: ", error.message);
    }
    dispatch(
      setUser({
        email: data.email,
      })
    );
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          padding: 2,
          border: "2px solid blue",
        }}
      >
        <Box>
          <Typography variant="h2">Login</Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <TextField
                id="outlined-basic"
                label="Email"
                variant="outlined"
                {...register("email")}
                error={errors?.email}
                helperText={errors?.email?.message}
              />

              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                {...register("password")}
                error={errors?.password}
                helperText={errors?.password?.message}
              />

              <Button type="submit" variant="contained">
                Submit
              </Button>

              <Link to={"signup"}>
                <Button variant="outlined">Sign Up</Button>
              </Link>
            </Stack>
          </form>
        </Box>
      </Container>
    </>
  );
}
