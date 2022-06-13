import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import React from "react";
import "./Basic.scss";
const Basics = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          color: "slategrey",
          marginBottom: "10px",
        }}
      >
        Basic Information
      </Typography>
      <form className="form">
        <TextField
          label="Full Name"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <div className="subdiv">
          <TextField
            type={"email"}
            label="Email"
            variant="outlined"
            required
            sx={{
              input: {
                color: "royalblue",
                background: "transparent",
              },
            }}
          />
          <TextField
            type={"tel"}
            label="Phone"
            variant="outlined"
            required
            sx={{
              input: {
                color: "royalblue",
                background: "transparent",
              },
            }}
          />
        </div>
        <div className="subdiv">
          <TextField
            label="Proffesion"
            variant="outlined"
            required
            sx={{
              input: {
                color: "royalblue",
                background: "transparent",
              },
            }}
          />

          <TextField
            type={"text"}
            label="Webiste URL"
            variant="outlined"
            sx={{
              input: {
                color: "royalblue",
                background: "transparent",
              },
            }}
          />
        </div>
        <TextField
          type={"text"}
          label="Country"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <TextField
          type={"text"}
          label="City"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <TextField
          type={"text"}
          label="Pin Code"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <TextField
          type={"text"}
          label="Address"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "gray",
              background: "transparent",
            },
          }}
        />
        <TextField
          type={"text"}
          label="Linked In"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end"></InputAdornment>,
          }}
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <TextField
          type={"text"}
          label="Git Hub"
          variant="outlined"
          required
          sx={{
            input: {
              width: {
                lg: "390px",
                xm: "100%",
              },
              color: "royalblue",
              background: "transparent",
            },
          }}
        />
        <Button
          type="submit"
          sx={{
            background: "rgb(250, 93, 140)",
            color: "white",
            padding: "5px 10px",
            borderRadius: "50rem",
            marginBottom: "20px",
            "&:hover": {
              background: "red",
            },
          }}
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default Basics;
