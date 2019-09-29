import express from "express";

const router = express.Router();

router.get("", (req, res) => {
	console.log("Hello World!");
	res.json("Hello World!");
});

export default router;
