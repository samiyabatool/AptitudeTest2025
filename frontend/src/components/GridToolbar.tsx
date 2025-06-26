import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface GridToolbarProps {
  searchField: string;
  setSearchField: (v: string) => void;
  onReset: () => void;
}

const GridToolbar = ({
  searchField,
  setSearchField,
  onReset,
}: GridToolbarProps) => (
  <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
    <TextField
      size="small"
      placeholder="Search By Brand"
      value={searchField}
      onChange={(e) => setSearchField(e.target.value)}
      sx={{ flex: 1, backgroundColor: "#fff" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <Button variant="outlined" onClick={onReset}>
      Reset All Filters
    </Button>
  </Box>
);

export default GridToolbar;
