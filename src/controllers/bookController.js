import Book from '../models/Book.js';

// GET /books - Retrieve a list of all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};

// GET /books/:id - Retrieve a specific book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book' });
  }
};

// POST /books - Create a new book
export const createBook = async (req, res) => {
  try {
    const { title, author, genre } = req.body;
    const newBook = new Book({ title, author, genre });
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create book' });
  }
};

// PUT /books/:id - Update an existing book by ID
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update book' });
  }
};

// DELETE /books/:id - Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};
