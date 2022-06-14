import {
  InputLabel,
  TextareaAutosize,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import "./Basic.scss";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addWorkData } from "../Redux/work";
const Work = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(addWorkData(data))
    Navigate("/education")
  };
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "slategray", marginBottom: "10px" }}
      >
        Experience
      </Typography>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("company_name", { required: true })}
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
            {...register("role", { required: true })}
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
            {...register("website_of_company", {})}
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
              {...register("start_date", { required: true })}
            />
          </div>
          <div>
            <InputLabel sx={{ textAlign: "left" }}>End Date</InputLabel>
            <TextField
              variant="outlined"
              type={"date"}
              sx={{
                input: {
                  color: "royalblue",
                  background: "transparent",
                },
              }}
              {...register("end_date",{required:false})}
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
            {...register("Summary_experience", {})}
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
