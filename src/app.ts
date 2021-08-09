import express, { json, urlencoded, Request, Response } from 'express';
import BookRouter from './routers/book.router';

const PORT = 8080;
const app = express();
app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/health', (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.use('/books', BookRouter);

app.listen(PORT, () => {
  console.log(`Book store app listening at http://localhost:${PORT}`)
});
