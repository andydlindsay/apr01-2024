interface Publisher {
  name: string;
  yearStarted: number;
}

interface Book {
  id?: number;
  title: string;
  numPages: number;
  rating: number;
  relatedBooks?: Book[];
  publisher?: Publisher;
}

const books: Book[] = [];

const book: Book = {
  id: 42,
  title: 'lord of the rings',
  numPages: 1000,
  rating: 5,
};

books.push(book);
