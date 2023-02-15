export function productionMode(): boolean {
  return process.env.IS_PROD === "true";
}
