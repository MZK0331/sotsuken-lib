import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

import { UserPayload } from "../services/user";


declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const currentUser = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.jwt) {
        next()
        console.log('No JWT found in session')
        return
    }

    try {
        const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload
        req.currentUser = payload
    } catch (err) {
        console.log('Error verifying JWT', err)
    }

    next()
}