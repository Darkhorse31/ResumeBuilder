import { Outlet } from "react-router-dom";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const MainPage = () => {
  return (
    <>
      <div style={{ width: "80%", marginInline: "auto" }}>
        <Typography
          variant="h3"
          color={"gray"}
          fontWeight="bold"
          sx={{
            fontSize: {
              lg: "49px",
              xs: "40px",
            },
          }}
        >
          Resume Builder
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          Please Don`t Reload Page.
        </Typography>
        <div style={{ marginTop: "30px", width: "100%" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainPage;
