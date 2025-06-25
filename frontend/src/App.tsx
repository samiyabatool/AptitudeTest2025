import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container } from "@mui/material";
import BMWAppBar from "./components/BMWAppBar";
import Home from "./pages/Home";
import CarDetail from "./pages/CarDetail";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <BMWAppBar />
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  </BrowserRouter>
);

export default App;
