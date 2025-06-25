export const cleanNum = (val: string): number | null =>
  val && val !== "-" ? Number(val) || null : null;

export const cleanStr = (val: string): string | null =>
  val && val !== "-" && val.toLowerCase() !== "null" ? val.trim() : null;
