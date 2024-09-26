import { Stack } from "@mui/material";
import { FC } from "react";
import MySlide, { SlideProps } from "../Slide/MySlide";

export interface SlidesProps {
  slides: Array<SlideProps>;
}

const Slides: FC<SlidesProps> = (props) => {
  return (
    <Stack direction={"column"}>
      {props.slides.map((slide, index) => {
        return <MySlide key={index} {...slide}></MySlide>;
      })}
    </Stack>
  );
};

export default Slides;
