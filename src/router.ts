import { Router } from "express";
import { body, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// Book
router.get("/book", (req, res) => {
	res.json({ message: req.sh_secret });
});
router.get("/book/:id", () => {});
router.put(
	"/book/:id",
	body("title").isString(),
	handleInputErrors,
	(req, res) => {}
);
router.post(
	"/book",
	body("title").isString(),
	handleInputErrors,
	(req, res) => {}
);
router.delete("/book/:id", () => {});

// Review
router.get("/review", () => {});
router.get("/review/:id", () => {});
router.put(
	"/review/:id",
	body("title").isString(),
	body("review").isString(),
	handleInputErrors,
	(req, res) => {}
);
router.post(
	"/review",
	body("title").isString(),
	body("review").isString(),
	handleInputErrors,
	(req, res) => {}
);
router.delete("/review/:id", () => {});

export default router;
