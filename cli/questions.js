import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const question = (query) =>
  new Promise((resolve) => rl.question(query, resolve));

export const closeReadline = () => rl.close();
