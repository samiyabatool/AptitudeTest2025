import { Request, Response } from "express";
import * as carService from "../services/car.service";

export const getCars = async (_: Request, res: Response) => {
  try {
    const [cars, total] = await Promise.all([carService.fetchAllCars(), carService.countCars()]);
    res.json({ data: cars, total });
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const car = await carService.findCarById(req.params.id);
    if (!car) return res.status(404).json({ message: "Car not found" });
    res.json(car);
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

export const deleteCar = async (req: Request, res: Response) => {
  try {
    const result = await carService.removeCarById(req.params.id);
    if (!result) return res.status(404).json({ message: "Car not found" });
    res.json({ message: "Deleted" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
};

export const searchCars = async (req: Request, res: Response) => {
  const { field, operator, value } = req.body;
  if (!field || !operator) return res.status(400).json({ message: "Missing search parameters" });

  try {
    const cars = await carService.searchCars(field, operator, value);
    res.json({ data: cars, total: cars.length });
  } catch {
    res.status(400).json({ message: "Search failed" });
  }
};
