import * as React from "react";
import Stack from "@mui/material/Stack";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const RecPass = () => {
  return (
    <Stack
      direction="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="310px"
      mt="150px"
      sx={{
        justifyContent: "space-between",
      }}
    >
      <Stack
        sx={{
          fontWeight: "700",
          fontSize: "28px",
          mt: "50px",
        }}
      >
        Нууц үг сэргээх
      </Stack>
      <Stack
        sx={{
          display: "flex",
          gap: "25px",
        }}
      >
        Имэйл
        <TextField
          id="outlined-search"
          label="Имэйл хаягаа оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
            display: "flex",
            gap: "15px",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#ECEDF0",
            height: "48px",
            color: "black",
            border: "none",
          }}
        >
          Үргэлжлүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
