import { Response, NextFunction } from "express";

export interface IAuth {
  authenticateJWT(req: any, res: Response, next: NextFunction): void;
}
