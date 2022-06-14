import { LinkedCameraOutlined, } from "@mui/icons-material";
import {
  Typography,
  TextareaAutosize,
  InputLabel,
  TextField,
  InputAdornment,
  Button
} from "@mui/material";
import React from "react";

const Life = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "slategray", marginBottom: "30px" }}
      >
        Summary
      </Typography>
      <form className="form">
        <div>
          <InputLabel htmlFor="photo" sx={{ textAlign: "left" }} required>
            Select Image
          </InputLabel>
          <TextField
            type={"file"}
            id="photo"
            sx={{
              input: {
                background: "",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LinkedCameraOutlined
                    sx={{
                      position: "absolute",
                      fontSize: "20px",
                      right: "5px",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div>
          <InputLabel sx={{ textAlign: "left" }}>Introduce Yourself</InputLabel>
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
        <div>
          <InputLabel sx={{ textAlign: "left" }}>Hobbies</InputLabel>
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
        <div>
          <InputLabel sx={{ textAlign: "left" }}>
            Describe your work experennce
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

export default Life;
