import prisma from "../db";

// get all books
export const getBooks = async (req, res) => {
	const user = await prisma.user.findUnique({
		where: {
			id: req.user.id,
		},
		include: {
			books: true,
		},
	});

	res.json({ data: user.books });
};

// get one book
export const getOneBook = async (req, res) => {
	const id = req.params.id;

	const book = await prisma.book.findFirst({
		where: {
			id,
			belongsToId: req.user.id,
		},
	});

	res.json({ data: book });
};

// createBook
export const createBook = async (req, res, next) => {
	try {
		const book = await prisma.book.create({
			data: {
				title: req.body.title,
				belongsToId: req.user.id,
			},
		});

		res.json({ data: book });
	} catch (err) {
		next(err);
	}
};

// updateBook
export const updateBook = async (req, res) => {
	const updatedBook = await prisma.book.update({
		where: {
			id_belongsToId: {
				id: req.params.id,
				belongsToId: req.user.id,
			},
		},
		data: {
			title: req.body.title,
		},
	});

	res.json({ data: updatedBook });
};

// deleteBook
export const deleteBook = async (req, res) => {
	const deleted = await prisma.book.delete({
		where: {
			id_belongsToId: {
				id: req.params.id,
				belongsToId: req.user.id,
			},
		},
	});

	res.json({ data: deleted });
};
