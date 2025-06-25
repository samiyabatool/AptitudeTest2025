import CarModel from "../models/car.model";

export const fetchAllCars = () => CarModel.find();
export const countCars = () => CarModel.countDocuments();
export const findCarById = (id: string) => CarModel.findById(id);
export const removeCarById = (id: string) => CarModel.findByIdAndDelete(id);

export const searchCars = (field: string, operator: string, value: string | number) => {
  let filter: any = {};

  if (operator === "contains") filter[field] = { $regex: value, $options: "i" };
  else if (operator === "equals") filter[field] = value;
  else if (operator === "startsWith") filter[field] = { $regex: "^" + value, $options: "i" };
  else if (operator === "endsWith") filter[field] = { $regex: value + "$", $options: "i" };
  else if (operator === "isEmpty") filter[field] = { $in: [null, ""] };

  return CarModel.find(filter);
};
