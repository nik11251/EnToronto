import React from "react";
import { Box } from "@mui/material";
import MyImage from "../MyImage";
import TopRight from "../../assets/TopRight.png";

const Circles: React.FC = () => {
  return (
    <>
      {/* Top-right Circle */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 1,
          m: 2,
        }}
      >
        <MyImage src={TopRight} />
      </Box>

      {/* Bottom-left Circle */}
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: 1,
          m: 2,
        }}
      />
      <MyImage src={TopRight} />
    </>
  );
};

export default Circles;
