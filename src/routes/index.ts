import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;

const router = Router();

const truncFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

console.log("Loading modules...");

readdirSync(PATH_ROUTER).filter((fileName) => {
  const nameTruncked = truncFileName(fileName);

  if (nameTruncked !== "index") {
    import(`./${nameTruncked}`).then((response) => {
      router.use(`/${nameTruncked}`, response.router);
      console.log(` Module: [${nameTruncked}] loaded!`);
    });
  }
});

export default router;