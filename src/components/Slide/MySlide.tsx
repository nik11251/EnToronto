import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Grid from "@mui/material/Grid2";
import MyImage from "../MyImage";

export interface SlideProps {
  title: string;
  text?: React.ReactNode;
  image: string;
}

const MySlide: FC<SlideProps> = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Typography>{props.title}</Typography>
      </Grid>

      <Grid size={8}>{props.text}</Grid>
      <Grid size={4}>
        <MyImage src={props.image} />
      </Grid>
    </Grid>
  );
};

export default MySlide;
