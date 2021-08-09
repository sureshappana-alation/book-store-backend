import { books } from "../data/input.data";
import { IBook } from "../interfaces/book.interface";
import { Book } from '../models/book.model'

export class BookService implements IBook {
  public getBooks(): Promise<Book[]> {
    return Promise.resolve(books);
  }
  public getBookById(id: string): Promise<Book> {
    throw new Error("Method not implemented.");
  }
  public addBook(book: Book): Promise<void> {
    throw new Error("Method not implemented.");
  }

}
