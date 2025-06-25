import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef, GridApi } from "ag-grid-community";
import {
  Paper, Box, Snackbar, CircularProgress, IconButton, Tooltip,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import DeleteConfirmDialog from "./DeleteDialog";
import GridToolbar from "./GridToolbar";
import api from "../api";
import type { Car } from "../types/car";
import "../styles/carTable.css";

const CarTable = () => {
  const [rowData, setRowData] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [quickFilter, setQuickFilter] = useState("");
  const [snackbar, setSnackbar] = useState({ open: false, msg: "" });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [gridApi, setGridApi] = useState<GridApi | null>(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await api.get<{ data: Car[] }>("/");
      setRowData(data.data);
    } catch {
      setSnackbar({ open: true, msg: "Failed to load data" });
    }
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const handleDelete = async () => {
    if (!deleteId) return;
    try {
      await api.delete(`/${deleteId}`);
      setSnackbar({ open: true, msg: "Deleted" });
      fetchData();
    } catch {
      setSnackbar({ open: true, msg: "Delete failed" });
    }
    setDeleteId(null);
  };

  const handleReset = () => {
    gridApi?.setFilterModel(null);
    gridApi?.applyColumnState({ state: [] });
    setQuickFilter("");
    fetchData();
  };

  const defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    headerClass: "align-center",
    cellClass: "align-center",
    filter: true,
  };

  const columnDefs: ColDef[] = [
    {
      headerName: "#",
      valueGetter: "node.rowIndex + 1",
      width: 60,
      sortable: false,
      filter: false,
      cellClass: "align-center",
      headerClass: "align-center",
      pinned: "left",
    },
    { headerName: "Brand", field: "Brand", flex: 1 },
    { headerName: "Model", field: "Model", flex: 1 },
    { headerName: "Range (Km)", field: "Range_Km", flex: 1 },
    { headerName: "Top Speed", field: "TopSpeed_KmH", flex: 1 },
    { headerName: "Price (€)", field: "PriceEuro", flex: 1 },
    {
      headerName: "Actions",
      field: "actions",
      width: 150,
      filter: false,
      cellRenderer: (params: any) => (
        <Box>
          <Tooltip title="View">
            <IconButton
              size="small"
              color="primary"
              onClick={() => navigate(`/car/${params.data._id}`)}
            >
              <VisibilityIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              color="error"
              onClick={() => setDeleteId(params.data._id)}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      ),
      pinned: "right",
    },
  ];

  return (
    <Paper elevation={3} sx={{ p: 2, borderRadius: 2, position: "relative" }}>
      <GridToolbar
        quickFilter={quickFilter}
        setQuickFilter={setQuickFilter}
        onReset={handleReset}
      />
      <div className="ag-theme-bmw grid-container" style={{ width: "100%", borderRadius: 8 }}>
        {loading ? (
          <Box
            height={60 * 10 + 100}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        ) : (
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            quickFilterText={quickFilter}
            pagination
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 20, 30]}
            rowHeight={60}
            domLayout="autoHeight"
            animateRows
            sideBar={false}
            onGridReady={params => setGridApi(params.api)}
          />
        )}
      </div>
      {deleteId && (
        <DeleteConfirmDialog
          open={!!deleteId}
          onClose={() => setDeleteId(null)}
          onConfirm={handleDelete}
        />
      )}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={2000}
        onClose={() => setSnackbar({ open: false, msg: "" })}
        message={snackbar.msg}
      />
    </Paper>
  );
};

export default CarTable;
