import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./tesmplet.scss";
import person from "./n.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Typography } from "@mui/material";
import AddLocationRoundedIcon from "@mui/icons-material/AddLocationRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
const Templet = () => {
  const wdata = useSelector((state) => state);
  const BasicData = wdata.BasicData.value;
  const eduData = wdata.EduData.value;
  const LifeData = wdata.lifeData.value;
  const WorkData = wdata.workData.value;
  const hobbieStore=LifeData.Hobbies;
  const hobbies=hobbieStore.split(",");
  return (
    <>
      <div className="parent">
        <div className="main">
          <div className="main_left">
            {/* image  */}
            <div>
              <img
                src={person}
                alt="Person"
                width={200}
                height={200}
                style={{
                  objectFit: "fill",
                  borderRadius: "50%",
                  dropShadow: "4px,4px,0px,rgba(0,0,0,1)",
                }}
              />
            </div>
            <div style={{ display: `flex`, flexDirection: "column" }}>
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  height: "0px",
                }}
              >
                About
              </h4>
              <p
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  fontWeight: "400",
                  maxWidth: "90%",
                  marginInline: "auto",
                  paddingBottom: "30px",
                  borderBottom: "3px solid white",
                }}
              >
                {eduData.edu_summary}
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h4
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  height: "0px",
                }}
              >
                Website & Social Links
              </h4>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <LinkedInIcon sx={{ color: "blue", fontSize: "large" }} />
                <a href={`${BasicData.linkedin}`}>Linked In</a>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <GitHubIcon sx={{ color: "blue", fontSize: "large" }} />
                <a href={`${BasicData.github}`}>GitHub</a>
              </div>
            </div>
          </div>
          <div className="main_right" style={{ flex: ".7" }}>
            <section
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                paddingBottom: "0px 10px 0px 10px ",
                borderBottom: "2px solid #a4a7ab"
              }}
            >
              <div className="left_side">
                <Typography variant="h3" fontSize={"30px"} fontWeight={"bold"}>
                  {BasicData.name}
                </Typography>
                <Typography variant="subtitle2">
                  {BasicData.Profession}
                </Typography>
              </div>
              <div className="left_side">
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <AddLocationRoundedIcon sx={{ fontSize: "15px" }} />
                  <p style={{ textTransForm: "capitalize", fontSize: "15px" }}>
                    {BasicData.city},{BasicData.country}
                  </p>
                </div>
                {/* phone  */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <LocalPhoneRoundedIcon sx={{ fontSize: "15px" }} />
                  <p style={{ textTransForm: "capitalize", fontSize: "15px" }}>
                    + {BasicData.phone}
                  </p>
                </div>
                {/* email  */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <EmailRoundedIcon sx={{ fontSize: "15px" }} />
                  <p style={{ textTransForm: "capitalize", fontSize: "15px" }}>
                    {BasicData.email}
                  </p>
                </div>
              </div>
            </section>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                  gap: "10px",
                  background:"#e6e7e8",
                }}
              >
                <Typography
                  variant="h6"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    height: "0px",
                  }}
                >
                  Work & Experience
                </Typography>
                <div
                  className="subdiv"
                  style={{ textAlign: "left", padding: "10px" }}
                >
                  <Typography variant="subtitle1">
                    <span style={{ color: "rosybrown", fontWeight: "bold"}}>
                      {" "}
                      {WorkData.company_name}
                    </span>{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {WorkData.start_date}-
                      {WorkData.end_date === "" ? "Present" : WorkData.end_date}
                    </span>
                  </Typography>
                  <p>{WorkData.Summary_experience}</p>
                </div>
              </div>
            </div>
            <div style={{textAlign:"left"}}>
              <Typography variant="h6" sx={{height:"10px",fontWeight:"bold"}}>Skils</Typography>
              <ul>
              {  hobbies.map((item,index)=>{
                return <li key={index}>{item.toUpperCase()}</li>
              })}
              </ul>
              
            </div>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Templet;
