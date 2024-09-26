import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  src: string;
  alt?: string;
  height?: number;
  width?: number;
}

const MyImage: FC<Props> = (props) => {
  return (
    <Box
      component="img"
      sx={{
        height: props?.height ?? 233,
        width: props?.width ?? 350,
      }}
      alt={props?.alt ?? "this is an image"}
      src={props.src}
    />
  );
};

export default MyImage;
