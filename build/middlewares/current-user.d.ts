import { Request, Response, NextFunction } from "express";
import { UserPayload } from "../services/user";
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => void;
