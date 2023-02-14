import * as readline from "node:readline/promises";

export async function readLine(text: string): Promise<string> {
  const rl = readline.createInterface(process.stdin, process.stdout);
  const answer = await rl.question(text + "\n");
  rl.close();
  return answer;
}
