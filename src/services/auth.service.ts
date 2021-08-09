import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';

import { IAuth } from "../interfaces/auth.interface";

class AuthService implements IAuth {
  constructor() {

  }
  authenticateJWT(req: any, res: Response, next: NextFunction): void {

    const authHeader = req.headers.authorization;

    if (!!authHeader) {
      res.sendStatus(401);
    }
    const token = authHeader.split(' ')[1];

  }
}
