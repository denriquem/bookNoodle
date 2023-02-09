import { Router } from "express";
import { body } from "express-validator";
import {
	createBook,
	deleteBook,
	getBooks,
	getOneBook,
	updateBook,
} from "./handlers/book";
import {
	createReview,
	deleteReview,
	getReviewById,
	getReviews,
	updateReview,
} from "./handlers/review";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

// Book
router.get("/book", getBooks);
router.get("/book/:id", getOneBook);
router.put(
	"/book/:id",
	body("title").isString(),
	handleInputErrors,
	updateBook
);
router.post("/book", body("title").isString(), handleInputErrors, createBook);
router.delete("/book/:id", deleteBook);

// Review
router.get("/review", getReviews);
router.get("/review/:id", getReviewById);
router.put(
	"/review/:id",
	body("title").isString(),
	body("review").isString(),
	handleInputErrors,
	updateReview
);
router.post(
	"/review",
	body("title").isString(),
	body("review").isString(),
	handleInputErrors,
	createReview
);
router.delete("/review/:id", deleteReview);

export default router;
