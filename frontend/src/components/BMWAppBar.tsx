import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import bmwLogo from "../assets/bwm-logo.svg"; 

const BMWAppBar = () => (
  <AppBar position="static" color="primary" elevation={2}>
    <Toolbar>
      <Box
        component="img"
        src={bmwLogo}
        alt="BMW Logo"
        sx={{ height: 40, width: 40, mr: 2 }}
      />
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
        Electric Cars Data Grid
      </Typography>
      <ElectricBoltIcon
        sx={{
          fontSize: 28,
          color: "secondary.main",
          bgcolor: "secondary.contrastText",
          borderRadius: 1,
          p: 0.5,
        }}
      />
    </Toolbar>
  </AppBar>
);

export default BMWAppBar;
