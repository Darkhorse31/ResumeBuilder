import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const MainPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          color={"blue"}
          fontWeight="bold"
          sx={{
            fontSize: {
              lg: "49px",
              xs: "40px"
            },
          }}
        >
          Resume Builder
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "red" }}>
          Please Don`t Reload Page.
        </Typography>
        <div style={{ marginTop: "30px" }}></div>
      </Container>
    </>
  );
};

export default MainPage;
