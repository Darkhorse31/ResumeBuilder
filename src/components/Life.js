import { LinkedCameraOutlined } from "@mui/icons-material";
import {
  Typography,
  TextareaAutosize,
  InputLabel,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { addlifeSlice } from "../Redux/lifeSlice";
const Life = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(addlifeSlice(data));
    Navigate("/templet");
  };
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "slategray", marginBottom: "30px" }}
      >
        Summary
      </Typography>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("image", { required: true })}
          />
        </div>

        <div>
          <InputLabel sx={{ textAlign: "left" }}>
            Hobbies Seprated by Commos
          </InputLabel>
          <TextareaAutosize
            minRows={8}
            style={{
              width: "350px",
              backgroundColor: "rgba(0,0,0,0)",
              color: "royalblue",
              fontSize: "15px",
            }}
            {...register("Hobbies", {})}
          />
        </div>
        <div>
          <InputLabel sx={{ textAlign: "left" }}>
            Your Skills Seprated By Commos
          </InputLabel>
          <TextareaAutosize
            minRows={8}
            style={{
              width: "350px",
              backgroundColor: "rgba(0,0,0,0)",
              color: "royalblue",
              fontSize: "15px",
            }}
            {...register("experience", {})}
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
