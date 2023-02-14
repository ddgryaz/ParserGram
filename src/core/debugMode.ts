export function debugMode(): boolean {
  return process.env.IS_DEBUG === "true";
}
