import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import csv from "csv-parser";
import Car from "../models/car.model";
import { cleanNum, cleanStr } from "../utils/dataCleaner";

dotenv.config();
const cars: any[] = [];

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    fs.createReadStream("ElectricCarData.csv")
      .pipe(csv())
      .on("data", (data) => {
        cars.push({
          Brand: cleanStr(data.Brand),
          Model: cleanStr(data.Model),
          AccelSec: cleanNum(data.AccelSec),
          TopSpeed_KmH: cleanNum(data.TopSpeed_KmH),
          Range_Km: cleanNum(data.Range_Km),
          Efficiency_WhKm: cleanNum(data.Efficiency_WhKm),
          FastCharge_KmH: cleanNum(data.FastCharge_KmH),
          RapidCharge: cleanStr(data.RapidCharge),
          PowerTrain: cleanStr(data.PowerTrain),
          PlugType: cleanStr(data.PlugType),
          BodyStyle: cleanStr(data.BodyStyle),
          Segment: cleanStr(data.Segment),
          Seats: cleanNum(data.Seats),
          PriceEuro: cleanNum(data.PriceEuro),
          Date: cleanStr(data.Date),
        });
      })
      .on("end", async () => {
        try {
          await Car.deleteMany({});
          await Car.insertMany(cars);
          console.log(`Imported ${cars.length} cars.`);
        } catch (err) {
          console.error("Error importing cars:", err);
        }
        process.exit(0);
      });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });
