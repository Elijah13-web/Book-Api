import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  genre: { type: String, required: true, enum: ['Comedy', 'Romance', 'Tragedy', 'Horror'] },
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
