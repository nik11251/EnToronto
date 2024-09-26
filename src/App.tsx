import { Box } from "@mui/material";
import NavBar from "./components/NavBar";
import Slides from "./components/Slides";
import Grid from "@mui/material/Grid2";
import Circles from "./components/Circles";
import { slides } from "./sldies";

function App() {
  return (
    <Box>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid size={6}>
          <Slides slides={slides}></Slides>
        </Grid>
      </Grid>
      <Circles />
    </Box>
  );
}

export default App;
