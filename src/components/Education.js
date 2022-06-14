import {
  Typography,
  TextField,
  InputLabel,
  TextareaAutosize,
  Button,
} from "@mui/material";
import React from "react";
import "./Basic.scss";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { addeduData } from "../Redux/educationSlice";
const Education = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(addeduData(data));
    Navigate("/summary");
  };
  return (
    <>
      <Typography
        variant="h5"
        sx={{ color: "slategray", marginBottom: "30px" }}
      >
        Education
      </Typography>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type={"text"}
          label="Highest Education You have."
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
          {...register("Education", { required: true })}
        />
        <TextField
          type={"text"}
          label="University/School Name"
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
          {...register("university_name", { required: true })}
        />
        <div className="subdiv">
          <div>
            <InputLabel
              required
              sx={{ textAlign: "left", textTransform: "capitalize" }}
            >
              Start Date
            </InputLabel>
            <TextField
              type={"date"}
              required
              {...register("edu_startDate", { required: true })}
            />
          </div>
          <div>
            <InputLabel
              required
              sx={{ textAlign: "left", textTransform: "capitalize" }}
            >
              End Date
            </InputLabel>
            <TextField
              type={"date"}
              required
              {...register("end_date", { required: true })}
            />
          </div>
        </div>
        <div>
          <InputLabel sx={{ textAlign: "left" }}>
            Summary of Education.
          </InputLabel>
          <TextareaAutosize
            minRows={8}
            style={{
              width: "350px",
              backgroundColor: "rgba(0,0,0,0)",
              color: "royalblue",
              fontSize: "15px",
            }}
            {...register("edu_summary", { required: true })}
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

export default Education;
