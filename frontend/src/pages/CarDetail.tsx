import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Car } from "../types/car";
import api from "../api";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { humanizeField } from "../utils/format";
import "../styles/carDetail.css";

const CarDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get<Car>(`/${id}`);
        setCar(res.data);
      } catch {
        setCar(null);
      }
      setLoading(false);
    })();
  }, [id]);

  if (loading)
    return (
      <div className="car-detail-elegant-bg" style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CircularProgress />
      </div>
    );

  if (!car)
    return (
      <div className="car-detail-elegant-bg">
        <div className="car-detail-elegant-content">
          <Button
            startIcon={<ArrowBackIcon />}
            className="car-detail-elegant-backicon-btn"
            onClick={() => navigate(-1)}
            variant="text"
          >
            Back to Home
          </Button>
          <h2 className="car-detail-elegant-title">Car Not Found</h2>
          <div className="car-detail-elegant-divider" />
        </div>
      </div>
    );

  return (
    <div className="car-detail-elegant-bg">
      <div className="car-detail-elegant-content">
        <Button
          startIcon={<ArrowBackIcon />}
          className="car-detail-elegant-backicon-btn"
          onClick={() => navigate(-1)}
          variant="text"
        > Back to Home
        </Button>
        <div className="car-detail-elegant-title">{car.Brand} {car.Model}</div>
        <div className="car-detail-elegant-divider" />
        {car.PriceEuro && (
          <div className="car-detail-elegant-price">
            Price: €{car.PriceEuro.toLocaleString()}
          </div>
        )}
        <div className="car-detail-elegant-list">
          {Object.entries(car)
            .filter(([k]) => !["_id", "__v", "createdAt", "updatedAt", "Brand", "Model", "PriceEuro"].includes(k))
            .map(([key, val]) => (
              <div className="car-detail-elegant-row" key={key}>
                <span className="car-detail-elegant-key">
                  {humanizeField(key)}
                </span>
                <span className="car-detail-elegant-value">{String(val)}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
