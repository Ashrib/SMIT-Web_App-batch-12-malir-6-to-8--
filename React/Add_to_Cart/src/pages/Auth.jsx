import React from "react";
import Container from "@mui/material/Container";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Outlet } from "react-router";

export default function Auth() {
  return (
    <>
      Auth
      <Outlet />
    </>
  );
}
