import express, { Request, Response } from 'express';
import { BookService } from '../services/book.service';

const router = express.Router();
const bookService = new BookService();

router.get('/', async (req: Request, res: Response) => {
  res.json(await bookService.getBooks());
})

export default router;
