import prisma from "../db";

export const getReviews = async (req, res) => {
	const books = await prisma.book.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			review: true,
		},
	});

	const reviews = books.reduce((allReviews, book) => {
		return [...allReviews, ...book.review];
	}, []);

	res.json({ data: reviews });
};

export const getReviewById = async (req, res) => {
	console.log("test");
	const id = req.params.id;

	console.log(id);

	const review = await prisma.review.findUnique({
		where: {
			id: req.params.id,
		},
	});

	console.log(review);

	res.json({ data: review });
};

export const createReview = async (req, res) => {
	const book = await prisma.book.findUnique({
		where: {
			id: req.body.belongsToId,
		},
	});

	if (!book) {
		// does not belong to user
		res.json({ message: "No" });
	}

	const review = await prisma.review.create({
		data: req.body,
	});

	res.json({ data: review });
};

export const updateReview = async (req, res) => {
	const books = await prisma.book.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			review: true,
		},
	});

	const reviews = books.reduce((allReviews, book) => {
		return [...allReviews, ...book.review];
	}, []);

	const match = reviews.find((review) => review.id === req.params.id);

	if (!match) {
		res.json({ message: "Nope" });
	}

	const updatedReview = await prisma.review.update({
		where: {
			id: req.params.id,
		},
		data: req.body,
	});

	res.json({ data: updatedReview });
};

export const deleteReview = async (req, res) => {
	const books = await prisma.book.findMany({
		where: {
			belongsToId: req.user.id,
		},
		include: {
			review: true,
		},
	});

	const reviews = books.reduce((allReviews, book) => {
		return [...allReviews, ...book.review];
	}, []);

	const match = reviews.find((review) => review.id === req.params.id);

	if (!match) {
		res.json({ message: "Nope" });
	}
	const deleted = await prisma.review.delete({
		where: { id: req.params.id },
	});

	res.json({ data: deleted });
};
