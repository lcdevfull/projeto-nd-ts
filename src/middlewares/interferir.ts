import { RequestHandler, RequestParamHandler } from "express";

export const interferir: RequestHandler = (req, res, next) => {
  console.log("Executou");
  let logged = true;
  if (logged) {
    next();
  } else {
    res.status(403).json({ error: "Middleware barrou a ação" });
  }
};
