import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ produtos: [] });
});

router.post("/", (req, res) => {
  console.log("PARAMS", req.params);
  console.log("QUERY", req.query);
  console.log("BODY", req.body);
  res.json({ produtos: [] });
});

router.get("/:id", (req, res) => {
  console.log(req.params);
  res.json({ produtos: { name: "Compudador", price: "R$ 2355" } });
});

export default router;
