import { Box, List, ListItem, Typography } from "@mui/material";

import Slide1 from "./assets/slide1.png";
import Slide2 from "./assets/slide2.png";
import Slide3 from "./assets/slide3.png";
import Slide4 from "./assets/slide4.png";

const slide1Text = (
  <Box>
    <Typography>Our Club</Typography>
    <Typography>
      A project platform for creative minds to unite, share ideas, and work on
      exciting projects together with interdisciplinary people.
    </Typography>
  </Box>
);

const slide2Text = (
  <Box>
    <List sx={{ listStyleType: "disc" }}>
      <ListItem sx={{ display: "list-item" }}>
        It’s always hard to find the right people to work with
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        In UofT, every department is secluded with the rest of the University →
        hard to find a good collaboration partner.
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Entrepreneurship aspect is emphasized in Engineering and Commerce
        programs, but the interdisciplinary collaboration is not as emphasized
      </ListItem>
    </List>
  </Box>
);

const slide3Text = (
  <Box>
    <List sx={{ listStyleType: "disc" }}>
      <ListItem sx={{ display: "list-item" }}>Problem-solving based</ListItem>
      <ListItem sx={{ display: "list-item" }}>Social impacts</ListItem>
      <ListItem sx={{ display: "list-item" }}>
        Arts and Culture, Science and Engineering
      </ListItem>
      <ListItem sx={{ display: "list-item" }}>Networking</ListItem>
      <ListItem sx={{ display: "list-item" }}>Networking</ListItem>
    </List>
  </Box>
);

const slide4Text = (
  <Box>
    <Typography>Passion, Collaboration, Creation</Typography>
    <Typography>
      Actually “trying it” by small steps is encouraged in this club
    </Typography>
    <ListItem sx={{ display: "list-item" }}>
      How to communicate with teammates?
    </ListItem>
    <ListItem sx={{ display: "list-item" }}>How to build strategies?</ListItem>
    <ListItem sx={{ display: "list-item" }}>How to manage timeline?</ListItem>
    <ListItem sx={{ display: "list-item" }}>
      Technical knowledge/skills for relevant fields
    </ListItem>
    <Typography>Mutual support among projects and members</Typography>
  </Box>
);

export const slides = [
  { title: "What is EnToronto?", text: slide1Text, image: Slide1 },
  { title: "Problem", text: slide2Text, image: Slide2 },
  { title: 'What could be "Projects"?', text: slide3Text, image: Slide3 },
  { title: "Value", text: slide4Text, image: Slide4 },
  { title: "Club Timeline", text: slide1Text, image: Slide1 },
  { title: "Join Us", text: slide1Text, image: Slide1 },
];
