import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const createToken = async (req: Request, res: Response) => {
    const { username, commerce } = req.body;
    if (!username || !commerce) {
        res.status(400).json({ message: "Missing username or commerce" });
        return;
    }
    const token = jwt.sign({ username, commerce }, process.env.SECRET_KEY || "", { expiresIn: '5m' });
    res.json({ token });
}

export { createToken };