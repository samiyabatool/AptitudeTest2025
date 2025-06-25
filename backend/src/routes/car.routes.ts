import express from "express";
import * as carController from "../controllers/car.controller";

const router = express.Router();

router.get("/", carController.getCars);
router.get("/:id", carController.getCarById);
router.delete("/:id", carController.deleteCar);
router.post("/search", carController.searchCars);

export default router;
