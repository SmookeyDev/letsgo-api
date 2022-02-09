import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { ConnectionDB } from "../../helpers/db";

const insertContact = async (req: Request, res: Response) => {
    const { name, telephone } = req.body;
    const { authorization } = req.headers;

    if (!authorization) {
        res.status(401).json({ message: "No token provided" });
        return;
    };

    jwt.verify(authorization, process.env.SECRET_KEY || "", async (err, decoded) => {
        if (err) {
            res.status(401).json({ message: "Invalid token" });
            return;
        };

        if (typeof decoded === "object") {
            const { commerce } = decoded;

            const db = await ConnectionDB();

            db.collection('contacts').insertOne({ name, telephone, commerce, createdAt: new Date() }, (err, result) => {
                if (err) {
                    res.status(500).json({ message: "Error inserting contact" });
                    return;
                }
                res.json({ message: "Contact inserted" });
            });
        }
    });
};

export { insertContact };