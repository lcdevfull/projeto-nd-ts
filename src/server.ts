import express from "express";
import helmet from "helmet";
import path from "path";
import router from "./router";
import { errorHandler, notFoundRequest } from "./router/errorhandler";

const server = express();

//configurações do express
server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, "../public")));

// Rotas do servidor
server.use("/", router);
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(3000, () => {
  console.log("Servidor on em http://localhost:3000");
});
