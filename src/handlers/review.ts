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
	const id = req.params.id;

	const review = await prisma.review.findUnique({
		where: {
			id_belongsToId: {
				id,
				belongsToId: req.user.id,
			},
		},
	});

	res.json({ data: review });
};

export const createReview = async (req, res) => {
	const book = await prisma.book.findUnique({
		where: {
			id: req.body.id,
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
	const review = await prisma.review.update({
		where: {
			id: req.params.id,
			id_belongsToId: req.user.id,
		},
		data: req.body,
	});

	res.json({ data: review });
};

export const deleteReview = async (req, res) => {
	const deleted = await prisma.review.delete({
		where: {
			id_belongsToId: {
				id: req.params.id,
				belongsToId: req.book.id,
			},
		},
	});

	res.json({ data: deleted });
};
