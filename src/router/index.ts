import express, { RequestHandler } from "express";
import productsRouter from "./produtos";
import flightngRouter from "./voos";
import { interferir } from "../middlewares/interferir";

const router = express.Router();

//router.use(interferir);
router.use("/produtos", productsRouter);
router.use("/voos", flightngRouter);

router.get("/ping", (req, res) => {
  console.log("Executou o Ping");
  res.json({ pong: true });
});

router.get("/", (req, res) => {
  res.json({
    name: "Liliana",
    age: "28",
  });
});

export default router;
