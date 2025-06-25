import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface GridToolbarProps {
  quickFilter: string;
  setQuickFilter: (v: string) => void;
  onReset: () => void;
}

const GridToolbar = ({
  quickFilter,
  setQuickFilter,
  onReset,
}: GridToolbarProps) => (
  <Box display="flex" gap={2} flexWrap="wrap" mb={2}>
    <TextField
      size="small"
      value={quickFilter}
      onChange={(e) => setQuickFilter(e.target.value)}
      sx={{ flex: 1, backgroundColor: "#fff" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
    <Button
      variant="outlined"
      onClick={onReset}
    >
      Reset All Filters
    </Button>
  </Box>
);

export default GridToolbar;
