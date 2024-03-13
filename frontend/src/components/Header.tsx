import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import PersonIcon from "@mui/icons-material/Person";
import { Input as BaseInput } from "@mui/base/Input";
export const Header = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      display="flex"
      sx={{
        width: "1200px",
        height: "60px",
        gap: "255px",
        ml: "500px",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          display: "flex",
          font: "bold",
          // gap: "16px",
          fontSize: "16px",

          width: "553px",
          justifyContent: "space-between",
        }}
      >
        <img src="/pic.png" alt="" width={41} height={41} />
        <Box>НҮҮР</Box>
        <Box>ХООЛНЫ ЦЭС</Box>
        <Box>ХҮРГЭЛТЫН БҮС</Box>
      </Stack>

      <Stack
        direction="row"
        sx={{
          width: "502px",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <BaseInput aria-label="Demo input  " placeholder="Хайх" />
        <Box>
          <ShoppingBasketIcon />
          НҮҮР
        </Box>
        <Box>
          <PersonIcon />
          НЭВТРЭХ
        </Box>
      </Stack>
    </Stack>
  );
};
