import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./Basic.scss";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBasicData } from "../Redux/basicSlice";
import { useNavigate } from "react-router-dom";
const Basics = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.BasicData);
  console.log(data);
  useEffect(() => {
    console.log("This is run");
    
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addBasicData(data));
    Navigate("work");
  };
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
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("name", { required: true })}
        />
        {errors.name && <p style={{ color: "red" }}>Required *</p>}

        <TextField
          type={"email"}
          label="Email"
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
          {...register("email", { required: true })}
        />
        <TextField
          type={"tel"}
          label="Phone"
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
          {...register("phone", { required: true })}
        />

        <TextField
          label="Profesion"
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
          {...register("Profession", { required: true })}
        />

        <TextField
          type={"text"}
          label="Webiste URL"
          variant="outlined"
          {...register("website")}
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
          {...register("country", { required: true })}
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
          {...register("city", { required: true })}
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
          {...register("Pin Code", { required: true })}
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
          {...register("address", { required: true })}
        />
        <TextField
          type={"text"}
          label="Linked In"
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LinkedInIcon
                  style={{
                    fontSize: "20px",
                    position: "absolute",
                    right: "10",
                  }}
                />
              </InputAdornment>
            ),
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
          {...register("linkedin", { required: true })}
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
          {...register("github", { required: true })}
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
