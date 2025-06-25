import { Schema, model } from "mongoose";
import { Car } from "../types/car.interface";

const CarSchema = new Schema<Car>(
  {
    Brand: String,
    Model: String,
    AccelSec: Number,
    TopSpeed_KmH: Number,
    Range_Km: Number,
    Efficiency_WhKm: Number,
    FastCharge_KmH: Number,
    RapidCharge: String,
    PowerTrain: String,
    PlugType: String,
    BodyStyle: String,
    Segment: String,
    Seats: Number,
    PriceEuro: Number,
    Date: String,
  },
  { timestamps: true }
);

export default model<Car>("Cars", CarSchema);
