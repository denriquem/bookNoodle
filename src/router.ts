import { Router } from "express";

const router = Router();

// Book
router.get("/book", (req, res) => {
	res.json({ message: req.sh_secret });
});
router.get("/book/:id", () => {});
router.put("/book/:id", () => {});
router.post("/book", () => {});
router.delete("/book/:id", () => {});

// Review
router.get("/review", () => {});
router.get("/review/:id", () => {});
router.put("/review/:id", () => {});
router.post("/review", () => {});
router.delete("/review/:id", () => {});

export default router;
