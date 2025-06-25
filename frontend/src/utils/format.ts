export const fieldTitleMap: Record<string, string> = {
  AccelSec: "Acceleration (s)",
  TopSpeed_KmH: "Top Speed (km/h)",
  Range_Km: "Range (km)",
  Efficiency_WhKm: "Efficiency (Wh/km)",
  FastCharge_KmH: "Fast Charge (km/h)",
  RapidCharge: "Rapid Charge",
  PowerTrain: "Powertrain",
  PlugType: "Plug Type",
  BodyStyle: "Body Style",
  Segment: "Segment",
  Seats: "Seats",
  PriceEuro: "Price (€)",
  Date: "Release Date",
};

export function humanizeField(field: string): string {
  return fieldTitleMap[field] || field.replace(/_/g, " ");
}
