import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./tesmplet.scss";
import person from "./n.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Templet = () => {
  const wdata = useSelector((state) => state);

  useEffect(() => {
    console.log("This is");
  }, []);

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
            <div style={{ display: "flex", flexDirection: "column" }}>
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
                Is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley
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
                <a href="">Linked In</a>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <GitHubIcon sx={{ color: "blue", fontSize: "large" }} />
                <a href="">GitHub</a>
              </div>
            </div>
          </div>
          <div className="main_right"></div>
        </div>
      </div>
    </>
  );
};
export default Templet;
