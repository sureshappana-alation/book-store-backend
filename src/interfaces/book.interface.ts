import { Book } from "../models";

export interface IBook {
  getBooks(): Promise<Book[]>;
  getBookById(id: string): Promise<Book>;
  addBook(book: Book): Promise<void>
}
