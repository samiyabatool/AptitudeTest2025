import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography
} from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export interface DeleteConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

const DeleteConfirmDialog = ({
  open,
  onClose,
  onConfirm,
  title = "Delete Record",
  description = "Are you sure you want to delete this record? This action cannot be undone.",
}: DeleteConfirmDialogProps) => (
  <Dialog open={open} onClose={onClose} maxWidth="xs" PaperProps={{
    sx: {
      borderRadius: 3,
      background: "#f9fbfd",
      boxShadow: 8,
    }
  }}>
    <DialogTitle>
      <Box display="flex" alignItems="center" gap={1.5}>
        <DeleteForeverIcon color="error" fontSize="large" />
        <Typography variant="h6" fontWeight={700} color="error.main" letterSpacing={1}>
          {title}
        </Typography>
      </Box>
    </DialogTitle>
    <DialogContent>
      <DialogContentText sx={{ fontSize: 16, color: "#2d3c4e", mb: 1.5 }}>
        {description}
      </DialogContentText>
    </DialogContent>
    <DialogActions sx={{ px: 3, pb: 2, justifyContent: "flex-end" }}>
      <Button variant="outlined" onClick={onClose} sx={{
        borderRadius: 2,
        minWidth: 90,
      }}>
        Cancel
      </Button>
      <Button
        color="error"
        variant="contained"
        onClick={onConfirm}
        sx={{
          borderRadius: 2,
          minWidth: 90,
          ml: 1,
          boxShadow: "0 2px 8px 0 rgba(220,0,0,0.05)"
        }}
      >
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteConfirmDialog;
