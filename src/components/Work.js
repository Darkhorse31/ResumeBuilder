import {
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import "./Basic.scss";
const Work = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "slategray", marginBottom: "10px" }}
      >
        Experience
      </Typography>
      <form className="form">
        <div className="subdiv2">
          <TextField
            label="Name of Comapny"
            variant="outlined"
            required
            type={"text"}
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
            label="Role in Company"
            variant="outlined"
            required
            type={"text"}
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
            label="Website of Comapny if"
            variant="outlined"
            type={"text"}
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
        </div>
        <div className="subdiv">
          <div>
            <InputLabel htmlFor="startdate" sx={{ textAlign: "left" }} required>
              Start Date
            </InputLabel>
            <TextField
              type={"date"}
              variant="outlined"
              required
              id="startdate"
              sx={{
                input: {
                  color: "royalblue",
                  background: "transparent",
                },
              }}
            />
          </div>
          <div>
            <InputLabel sx={{ textAlign: "left" }} required>
              End Date
            </InputLabel>
            <TextField
              variant="outlined"
              required
              type={"date"}
              sx={{
                input: {
                  color: "royalblue",
                  background: "transparent",
                },
              }}
            />
          </div>
        </div>
        <div>
          <InputLabel sx={{ textAlign: "left" }}>
            Summary of Experience.
          </InputLabel>
          <TextareaAutosize
            minRows={8}
            style={{
              width: "350px",
              backgroundColor: "rgba(0,0,0,0)",
              color: "royalblue",
              fontSize: "15px",
            }}
          />
        </div>
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

export default Work;
