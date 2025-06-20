import { readFile, writeFile } from "fs/promises";

const exec = async () => {
  const fileContent = await readFile("./teste.txt", { encoding: "utf8" });
  const list = fileContent.split("\n");
  console.log(list);
};

exec();
