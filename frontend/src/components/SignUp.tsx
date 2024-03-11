import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Button from "@mui/material/Button";

export const SignUp = () => {
  return (
    <Stack
      direction="column"
      height="772px"
      width="full"
      alignItems="center"
      display="flex"
    >
      <Stack
        sx={{
          fontSize: "28px",
          fontWeight: "700",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "106px",
        }}
      >
        Бүртгүүлэх
      </Stack>
      <Stack
        direction="column"
        sx={{
          display: "flex",
          gap: "16px",
        }}
      >
        Нэр
        <TextField
          id="outlined-search"
          label="Нэрээ оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
          }}
        />
        И-мэйл
        <TextField
          id="outlined-search"
          label="И-мэйл хаягаа оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
          }}
        />
        Хаяг
        <TextField
          id="outlined-search"
          label="Та хаягаа оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
          }}
        />
        Нууц үг
        <TextField
          id="outlined-search"
          label="Нууц үгээ оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
          }}
        />
        Нууц үг давтах
        <TextField
          id="outlined-search"
          label="Нууц үгээ оруулна уу"
          type="search"
          sx={{
            width: "384px",
            backgroundColor: "#ECEDF0",
          }}
        />
        <Stack
          direction="row"
          sx={{
            display: "flex",
            gap: "10px",
            mt: "45px",
          }}
        >
          {" "}
          <CheckBoxIcon /> Үйлчилгээний нөхцөл зөвшөөрөх
        </Stack>
        <Button
          variant="outlined"
          sx={{
            bgcolor: "#ECEDF0",
            height: "48px",
            color: "black",
          }}
        >
          Бүртгүүлэх
        </Button>
      </Stack>
    </Stack>
  );
};
